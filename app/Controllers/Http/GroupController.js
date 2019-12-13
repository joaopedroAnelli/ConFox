'use strict'
const instance = use('Neode');


class GroupController {

  async recomendedGroups({request}) {
    let records = (await instance.cypher(
      'match (u:User {name: $name})-[:INTEREST_IN]->(i)<-[:INTEREST_IN]-(semelhantes), ' +
      '(semelhantes)-[:BELONGS_TO]->(g)\n' +
      'where not (u)-[:BELONGS_TO]->(g)<-[:BELONGS_TO]-(semelhantes) ' +
      'and u <> semelhantes ' +
      'return id(g) as id, g.name as name, count(*) as weight, g.description as description order by weight desc',
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


  async show({params, response}) {
    const group = await instance.findById('Group', params.id)
    let usersToObject = []
    let users = (
      await instance.cypher(
        `match (u:User)-[:BELONGS_TO]->(g:Group) where id(g) = ${params.id} return id(u) as id, u.name, u.email`,
        {
        }
      )
    ).records;

    usersToObject = users.map(record => {
      return record.toObject()
    })

    return response.json({
      name: group.get('name'),
      description: group.get('description'),
      users: usersToObject
    });
  }
}

module.exports = GroupController
