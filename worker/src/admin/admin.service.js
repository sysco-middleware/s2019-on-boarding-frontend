const { secret } = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Admin = db.Admin;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
}

async function authenticate({ username, password }) {
    const admin = await Admin.findOne({username});
    if(admin && bcrypt.compareSync(password, admin.hash)) {
        const { hash, ...adminWithoutHash } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, secret);
        return {
            ...adminWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await Admin.find().select('-hash');
}

async function getById(id) {
    return await Admin.findById(id).select('-hash');
}

async function create(adminParam) {
    // validate
    if (await Admin.findOne({ username: adminParam.username })) {
        throw 'Username "' + adminParam.username + '" is already taken';
    }

    const admin = new Admin(adminParam);

    // hash password
    if (adminParam.password) {
        admin.hash = bcrypt.hashSync(adminParam.password, 10);
    }

    // save user
    await admin.save();
}

async function update(id, adminParam) {
    const admin = await Admin.findById(id);

    // validate
    if (!admin) throw 'User not found';
    if (admin.username !== adminParam.username && await Admin.findOne({ username: adminParam.username })) {
        throw 'Username "' + adminParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (adminParam.password) {
        adminParam.hash = bcrypt.hashSync(adminParam.password, 10);
    }

    // copy adminParam properties to user
    Object.assign(admin, adminParam);

    await admin.save();
}

async function _delete(id) {
    await Admin.findByIdAndRemove(id);
}