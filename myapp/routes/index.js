var express = require('express');
var router = express.Router();
let fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('xxxxxxxx')
});

router.post('/', (req,res) =>{
  res.send('xaaaaaa')
});

router.get('/jobs',(req,res) => {
  let result = {
    name:'xxx',
    aget:2322
  }
  res.json( result );
})

router.get('/file',(req,res) => {
  fs.readFile('../public/sample.txt','utf-8',(err,data) => {
    if(err) console.log(err)
    else res.send( data )
  })
})


module.exports = router;
