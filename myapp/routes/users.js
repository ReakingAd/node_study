var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'dbuser',
  password:'s3kreee7',
  database:'my_db'
})

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution',(err,rows,fields) => {
// 	if (err) throw err
// 	console.log( 'The solution is : ' + rows[0].solution );
// })

// connection.end();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
