var config = require("../config")var video = require("./video")    video.aggregate([{        $project:{            videoId:'$_id',            _id: 0        }    }]).exec(function(err,data){        console.log(data)    })