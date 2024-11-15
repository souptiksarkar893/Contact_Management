const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: [validator.isEmail, 'Invalid email format']
    },
    phoneNumber: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);