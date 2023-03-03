const contact = require("../models/contact")

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await contact.find();
        if (!contacts || contacts.length == 0) {
            throw new Error("contacts not found")
        }
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const updateContact = async (req, res, next) => {
    try {
        const { fullName, phone } = req.body;
        const { id } = req.params;


        if (!fullName || !phone || !id) {
            throw new Error("please verify your entries")

        }
        const updatedContact = await contact.findByIdAndUpdate(id,
            {
                $set: { fullName, phone }
            }, { new: true })   
        res.json(updatedContact)
    } catch (error) {
        res.status(500).json(error.message)

    }
}

const addContact = async(req,res,next)=>{
    try {
        const {fullName,phone} =req.body;
    
        const newContact = new contact({fullName,phone})
        await newContact.save()
        res.json(addedContact)
        if(!newContact){
            throw new Error("error while addind contact")

        }
    } catch (error) {
        res.status(500).json(error.message)

    }


}


module.exports = { getAllContacts , addContact , updateContact}