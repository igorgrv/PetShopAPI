const customExpress = require('./src/config/custom-express');
const Table = require('./src/app/database/table');
const connection = require('./src/app/database/connection');
connection.connect((error) => {
  if (error) {
    console.log('Error when trying to connect to the DB');
  } else {
    console.log('Connected to the DB...');

		Table.init(connection);
    const app = customExpress();
    app.listen(3000, () => console.log('Server running at port 3000'));
  }
});
