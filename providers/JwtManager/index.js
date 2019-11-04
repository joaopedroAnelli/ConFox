const jwt = require('jsonwebtoken');

class JwtManager {
  constructor(Config) {
    this.Config = Config
  }
  generate(user) {
    return jwt.sign(user, this.Config.get('app.appKey'))
  }

  handle(token) {
    try {
      return jwt.verify(token, this.Config.get('app.appKey'));
    } catch (err) {
      return false
    }
  }
}


module.exports = JwtManager;
