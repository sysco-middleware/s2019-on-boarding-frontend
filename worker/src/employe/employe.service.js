const { secret } = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Employe = db.Employe;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
}

async function getAll() {
    return await Employe.find().select();
}

async function getById(id) {
    return await Employe.findById(id).select();
}

async function create(employeParam) {
    if (await Employe.findOne({ firstName: employeParam.firstName }) && await Employe.findOne({ lastName: employeParam.lastName })) {
        throw 'Employe "' + employeParam.firstName + " " + employeParam.lastName + '" is already registered for onboarding';
    }

    const employe = new Employe(employeParam);

    await employe.save();
}

async function update(id, employeParam) {
    const employe = await Employe.findById(id);

    // validate
    if (!employe) throw 'User not found';
    if ((employe.firstName !== employeParam.firstName && await Employe.findOne({ firstName: employeParam.firstName })) || (employe.lastName !== employeParam.lastName && await Employe.findOne({ lastName: employeParam.lastName }))) {
        throw 'Employe "' + employeParam.firstName + " " + employeParam.lastName + '" is already registered for onboarding';
    }

    // copy employeParam properties to user
    Object.assign(employe, employeParam);

    await employe.save();
}

async function _delete(id) {
    await Employe.findByIdAndRemove(id);
}