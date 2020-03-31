var express = require('express');
var router = express.Router();
const model = require('../model/index')

/* GET home page. */
router.post('/login', function (req, res, next) {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    model.connect((db) => {
        db.collection('user').findOne(data).toArray((err, dos) => {
            if (err) {
                res.json({
                    status: '1',
                    msg: err.message
                });
            } else {
                if (dos.length > 0) {
                    res.json({
                        status: '0',
                        result: {
                            count: dos.length,
                            list: dos
                        }
                    })
                } else {
                    res.json({
                        status: '1',
                        msg: '登录失败'
                    })
                }

            }
        })
    })
});

module.exports = router;