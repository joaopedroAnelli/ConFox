'use strict';
const User = use('App/Models/User');

class UserController {
  async create({request}) {
    let user = new User();

    user.fill(request.all());

    user.save();

    return user.toJson()
  }


  async login() {
  }
}

module.exports = UserController;
