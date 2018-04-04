var express = require("express");var router = express.Router();var category = require("../../database/model/videosCategory")router.post("/add",(req, res) => {    let {title,icon,sort} = req.body;    sort = parseInt(sort);    category.create({title,icon,sort}).then(data => {        res.json({            data: 'success',            msg: 'success',            code: 200        })    }).catch(err => {        res.json({            data: err,            msg: '内部错误，请稍后重试',            code: 500        })    })})router.get("/get",(req, res) => {    let {page=1,id} = req.query;    let params = {}    if(id){       params._id = id    }    category.find(params).limit(10).skip((page-1)*10).sort({sort: 1,_id: -1}).then(data => {        res.json({            data,            msg: 'success',            code: 200        })    })})router.post("/update", (req, res) => {    let {id,title,icon,sort} = req.body;    category.update({_id: id},{$set: {title,icon,sort}}).then(data => {        res.json({            data: 'success',            msg: 'success',            code: 200        })    }).catch(err => {        res.json({            data: err,            msg: '内部错误，请稍后重试',            code: 500        })    })})router.post("/del",(req, res) => {    let {id} = req.body;    category.remove({_id:id}).then(data => {        res.json({            data: 'success',            msg: 'success',            code: 200        })    }).catch(err => {        res.json({            data: err,            msg: '内部错误，请稍后重试',            code: 500        })    })})module.exports = router;