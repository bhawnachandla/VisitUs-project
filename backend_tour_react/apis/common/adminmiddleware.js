const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.headers['authorization']
    if (token) {
        jwt.verify(token, "travelling_agency", function (err, decoded) {
            if (err) {
                return res.json({
                    'status': false,
                    'message': 'unAuthorized Access'
                });
            }
            req.decoded = decoded
            if (req.decoded.user_type == 1) {
                next()
            }
            else {
                res.json({
                    'status': false,
                    'message': 'Unauthorized access'
                })
            }
        })
    }
    else {
        res.json({
            status: 403,
            success: false,
            message: 'invalid token'
        })
    }
}