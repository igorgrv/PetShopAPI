const user = require('../models/user');

class UserController {
  static routes() {
    return {
      users: '/users',
      user: '/users/:id',
    };
  }

  getUsers() {
    return (req, res) => {
      user.getUsers(res);
    };
  }

  addUser() {
    return (req, res) => {
      user.addUser(res, req.body);
    };
  }
}

module.exports = UserController;
