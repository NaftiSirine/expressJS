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
module.exports = { getAllContacts }