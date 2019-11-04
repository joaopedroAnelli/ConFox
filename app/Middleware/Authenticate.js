'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const JwtManager = use('JwtManager');

class Authenticate {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const token = request.header('Authorization').substr(7);
    const user = JwtManager.handle(token);

    if (user) {
      request.user = user
    } else {
      return response.status(401).send({message: 'Token inválido'})
    }


    await next();
  }
}

module.exports = Authenticate
