var express = require('express');
const contact = require('../models/contact');
var router = express.Router();
const {getAllContacts}= require('../controllers/contactsController')




router.get('/',getAllContacts);

          

router.delete('/:id', function(req, res, next) {
    const {id} = req.params.id;
console.log(req.params)
    contact.findByIdAndRemove(id).then(data=> {
        if (!data ) {
            res.status(404).send({
              message: `Cannot delete contact with id=${id}. Maybe contact was not found!`
            });
          } else {
            res.send({
              message: "contact was deleted successfully!"
            });
          }
        })
    .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });});
  

    


module.exports = router;