const {ServiceProvider} = require('@adonisjs/fold');
const Neode = require('neode');

class NeodeProvider extends ServiceProvider {
  register() {
    this.app.bind('Neode', () => {
      const instance = new Neode('bolt://localhost:7687', 'neo4j', '123mudar');

      instance.withDirectory(__dirname+'/../app/Models');

      return instance;
    })
  }
}

module.exports = NeodeProvider;


