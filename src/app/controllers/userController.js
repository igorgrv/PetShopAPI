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

  getUser() {
    return (req, res) => {
      const id = req.params.id;
      user.getUser(res, id);
    };
  }

  updateUser() {
    return (req, res) => {
      const id = req.params.id;
      user.updateUser(res, req.body, id);
    };
  }

  deleteUser() {
    return (req, res) => {
      const id = req.params.id;
      user.deleteUser(res, id);
    };
  }
}

module.exports = UserController;
