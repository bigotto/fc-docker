const express = require('express');
const app = express();
const mysql = require('mysql');

const PORT = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

app.get('/', async (req, res) => {
  const connetion = mysql.createConnection(config);
  const insertData = `INSERT INTO people(name) values('Bruno')`;
  connetion.query(insertData);
  connetion.query(`SELECT * FROM people`, (error, results) => {
    if (error) {
      return res.status(400).send(error.sqlMessage);
    }

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${results.length ? results.map(item => `<li>${item.name}</li>`).join('') : '' }
      </ul>
    `);
  });
  connetion.end();
})

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`)
})