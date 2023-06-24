const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: String,
    description: String,
    source: String,

});

var Content = mongoose.model('Content', contentSchema);
module.exports = Content;