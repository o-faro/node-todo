const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachement: Boolean,
})

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;