'use strict'
const instance = use('Neode');


class InterestController {
  async list() {
    let records = (await instance.cypher('match (i:Interest) return i.name as name', {})).records

    return records.map(record => {
      let interest = {};
      record.keys.forEach((key, index) => {
        interest[key] = record._fields[index]
      });

      return interest
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

module.exports = InterestController
