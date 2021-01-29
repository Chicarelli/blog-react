const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    type: {type: String, default: "aleatorio"},
    title: {type: String, required: true},
    subtitle: {type: String}, 
    content: {type: String, required: true}, 
    when: {type: Date, default: Date.now()}, 
    lastEdit: {type: Date}
});

module.exports = mongoose.model('Post', PostSchema);