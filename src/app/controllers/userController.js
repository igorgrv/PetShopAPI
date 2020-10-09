class UserController {
  static routes() {
    return {
      users: '/users',
      user: '/users/:id',
    };
  }

  getUsers() {
    return (req, res) => {
      res.send('getall');
    };
  }

  addUser() {
    return (req, res) => {
      console.log(req.body);
      res.send('addUser');
    };
  }
}

module.exports = UserController;
