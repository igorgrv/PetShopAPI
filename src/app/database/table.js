class Table {
  init(connection) {
    console.log('Creating tables...');
    this.connection = connection;
    this.creatAtentimentos();
  }

  creatAtentimentos() {
    const sql =
      'CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, email varchar(50) NOT NULL, password varchar(255) NOT NULL, creationDate datetime NOT NULL , PRIMARY KEY(id))';

    this.connection.query(sql, (error) => {
      if (error) console.log('Error when trying to create table: ' + error);
      console.log('Tables created with success...');
    });
  }
}
module.exports = new Table();