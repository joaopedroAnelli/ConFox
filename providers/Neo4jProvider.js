const {ServiceProvider} = require('@adonisjs/fold');
const neo4j = require('neo4j-driver').v1;

class Neo4jProvider extends ServiceProvider {
  register() {
    this.app.bind('Neo4j', () => {
      const driver = neo4j.driver(
        'bolt://localhost:7687',
        neo4j.auth.basic('neo4j', '123mudar')
      );

      const session = driver.session();

      return {driver, session}
    })
  }
}

module.exports = Neo4jProvider;


