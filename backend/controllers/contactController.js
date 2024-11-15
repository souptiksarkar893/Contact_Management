// backend/controllers/contactController.js
const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};