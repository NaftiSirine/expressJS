var express = require('express');
var router = express.Router();
const products = require('../products.json');
router.get('/', function (req,res,next){

    res.json(products)
})


module.exports = router;