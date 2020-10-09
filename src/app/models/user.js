const connection = require('../database/connection');
const moment = require('moment');

class User {
  getUsers(res) {
    const sql = 'SELECT * FROM users';

    connection.query(sql, (err, result) => {
      if (err) res.status(400).json(err);
      res.status(200).json(result);
    });
  }

  addUser(res, user) {
    const creationDate = moment().format('YYYY-MM-DD hh:mm:ss');
    const userDate = { ...user, creationDate };

    const validUser = user.name.length >= 4;
    const validEmail = user.email.length >= 5;
    const validPassword = user.password.length >= 3;

    const validations = [
      {
        field: 'name',
        valid: validUser,
        message: 'name must have at least 4 characters',
      },
      {
        field: 'email',
        valid: validEmail,
        message: 'email must have at least 5 characters',
      },
      {
        field: 'password',
        valid: validPassword,
        message: 'password must have at least 3 characters',
      },
    ];

    const errors = validations.filter((fields) => !fields.valid);
		const hasError = errors.length;
    if (hasError) {
      res.status(400).json(errors);
    } else {
      const sql = 'INSERT INTO users SET ?';

      connection.query(sql, userDate, (err) => {
        if (err) res.status(400).json(err);
        else res.status(200).json(userDate);
      });
    }
  }
}

module.exports = new User();
