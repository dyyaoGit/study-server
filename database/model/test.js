var config = require("../config")var video = require("./video")video.create({    title: "我是测试数据4"}, (err, data) => {    if(err){        console.log(err)    }    console.log(data)})