var express = require('express');
var router = express.Router();
const products = require('../products.json');
router.get('/', function (req,res,next){
try {
    if(!products ){
        throw new Error("products not found")
    }
    res.json(products)
} catch (error) {
    res.status(500).json(error.message)
}
   
})

router.get('/:id',(req,res,next)=>
{
    const {id} = req.params;
    if(!products ){
        throw new Error("products not found")
    }
    if(!products[id.toUpperCase()]) {
        throw new Error("id must be valid")

    }
   
    res.json(products[id.toUpperCase()])
})

module.exports = router;