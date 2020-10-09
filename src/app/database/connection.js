const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	port:'3306',
	database: 'talentrecruiter',
	user:'root',
	password:'root'
});

module.exports = connection