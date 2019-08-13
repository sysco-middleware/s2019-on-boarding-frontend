const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    personalEmail: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    personalNumber: { type: Number, required: true },
    bankAccNumber: { type: String, required: true },
    startDate: { type: Date, required: true },
    department: { type: String, required: true },
    positionDesc: { type: String, required: true },
    equipment: { type: String, required: true },
    nearestBoss: { type: String, required: true },
    syscoEmail: {type: String},
    accessGiven: {},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Employe', schema);