const mongoose = require("mongoose");let categorySchema = new mongoose.Schema({    title: {        type: String,        require: true    },    icon: {        type: String,        require: true    },    sort: {        type: Number,        default: 99999    }},{versionKey: false})module.exports = mongoose.model("videoCategory", categorySchema)