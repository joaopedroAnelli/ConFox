'use strict'
const Model = use('App/Models/Model');

class User extends Model {
  constructor(object) {
    super();
    this.$label = 'User';
    this.$fillable = [
      'name',
      'email',
      'password'
    ];
  }
}

module.exports = User;
