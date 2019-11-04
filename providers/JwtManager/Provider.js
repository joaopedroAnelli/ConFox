const {ServiceProvider} = require('@adonisjs/fold');
const JwtManager = require('.');

class Provider extends ServiceProvider {
  register() {
    this.app.bind('JwtManager', () => {
      const config = this.app.use('Adonis/Src/Config');
      return new JwtManager(config);
    })
  }

}

module.exports = Provider;
