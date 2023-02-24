const mongoose = require("mongoose"); 
var Contactschema = mongoose.Schema(
{
FullName : String,
Phone : Number
}
);
 module.exports = mongoose.model("Contact",Contactschema);