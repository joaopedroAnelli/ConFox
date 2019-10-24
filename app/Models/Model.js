'use strict';
const {driver, session} = use('Neo4j');

class Model {
  constructor() {
    this.$attributes = {}
  }
  fill(object) {
    this.$fillable.forEach(attribute => {
      this.$attributes[attribute] = object[attribute];
    })
  }

  save() {
    const resultPromise = session.run(
      `CREATE (model:${this.$label} ${this.toCypher()}) RETURN model`
    );

    resultPromise
      .then(result => {
        session.close();
        driver.close();
      })
      .catch(err => {
        console.log(err)
      })
  }


  toJson() {
    return JSON.stringify(this.$attributes)
  }

  toCypher() {
    const json = this.toJson();
    let cypher = String(json);

    const keys = Object.keys(this.$attributes);

    keys.forEach(key => {
      cypher = cypher.replace('\"'+key+'\"', key)
    });

    return cypher;
  }
}

module.exports = Model;
