var express = require("express");var router = express.Router();var qiniuToken = require("../utils/qiniu")var downUrl = require("../utils/download")router.get("/getToken", (req, res) => {    res.json({        data: qiniuToken(),        code: 200,        msg: 'success'    })})router.get("/getDown", (req, res) => {    let key = req.query.key;    res.json({        data: downUrl(key),        code: 200,        msg: 'success'    })})module.exports = router;