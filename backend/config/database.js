const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/blog-rafael';

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});

module.exports = mongoose;