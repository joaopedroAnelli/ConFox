'use strict';
const instance = use('Neode');
const Hash = use('Hash');

class UserController {
  async create({request, response}) {

    const password = await Hash.make(request.input('password'));
    const user = {
      ...request.all(),
      password
    };

    delete user.passwordConfirmation;

    return instance.create('User', user)
      .then(u => {
        return response.status(201).json(user);
      })
      .catch(err => {
        return response.status(500).json({
          message: 'Ops, something went wrong :('
        });
      });
  }


  async login({ request, response }) {
    const user = await instance
      .model('User')
      .find(request.input('email'))

    if (
      user
      && await Hash.verify(request.input('password'), user.get('password'))
    ) {
      let userToReturn = {
        name: user.get('name'),
        email: user.get('email')
      };

      //TODO implement JWT
      userToReturn.token = 'aioduoisttio';
      return userToReturn
    } else {
      return response
        .status(400)
        .json({
          message: 'Ops nobody Here!'
        });
    }
  }
}

module.exports = UserController;
