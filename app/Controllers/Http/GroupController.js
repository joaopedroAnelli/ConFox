'use strict'
const instance = use('Neode');


class GroupController {

  async recomendedGroups({request}) {
    let records = (await instance.cypher(
      'match (u:User {name: $name})-[:INTEREST_IN]->(i)<-[:INTEREST_IN]-(semelhantes), ' +
      '(semelhantes)-[:BELONGS_TO]->(g)\n' +
      'where not (u)-[:BELONGS_TO]->(g)<-[:BELONGS_TO]-(semelhantes) ' +
      'and u <> semelhantes ' +
      'return id(g.id) as id, g.name as name, count(*) as weight, g.description as description order by weight desc',
      {name: request.user.name}
    )).records;

    return records.map(record => {

      return record.toObject()
    })
  }

  async list({request}) {
    let records = (
      await instance.cypher(
        'match (u:User {email: $email})-[:BELONGS_TO]->(g:Group) return id(g) as id, g.name as name',
      {
        email: request.user.email
      }
      )
    ).records

    return records.map(record => {
      return record.toObject()
    })
  }


  async interestOfUser({request, response}) {

    let records = (await instance.cypher(
      'match (i:Interest)<-[:INTEREST_IN]-(:User {email: $email}) return i.name as name',
      {email: request.user.email}
      )).records

    return records.map(record => {
      let interest = {};
      record.keys.forEach((key, index) => {
        interest[key] = record._fields[index]
      });

      return interest
    });

  }


    async attachToUser({request, response}) {

      let user = await instance
        .model('User')
        .find(request.user.email);


      for (const interest of request.input('interests')) {
        instance
          .first('Interest', 'name', interest.name)
          .then(nodeInterest => {
            user.relateTo(nodeInterest, 'interest_in')
          })
          .catch(err => {
            console.log(err)
          })
      }

      return response.status(200).send({message: 'Done!'})
    }
  }

module.exports = GroupController
