const expressJwt = require('express-jwt');
const { secret } = require('../config');
const userService = require('../admin/admin.service');

module.exports = jwt;

function jwt() {
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            //'/admin/',
            '/admin/authenticate',
            '/admin/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};