const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    // Define the schema fields for the contact model
    name: String,
    email: String,
    message: String
    // Add other fields as needed
});

const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;