const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
    questions: Number,
    description: String,
    note: Number,
    id_user: ObjectId,
    id_content: ObjectId,
})

var Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;