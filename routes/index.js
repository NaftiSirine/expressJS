var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sirine', function(req, res, next) {
  res.json("welcome to express");
});
router.post('/', function(req, res, next) {
  console.log(req.body)
try {
  if(x== null && x==undefined || !y ){
    throw new Error("you must specify x and y");
  }
  if(!Number.isInteger(x) && !Number.isInteger(y)){
    throw new Error("x and y must be integer");

  }
  const {x,y} = req.body
  res.json('la somme est : ${x+y}');
} catch (error) {
  res.status(500).json({message: error.message});
}});
module.exports = router;
