const Todos = require('../models/todo');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/:uname', (req, res) => {
    console.log(':uname', req.params);
    Todos.find({ username: req.params.uname })
      .then(data => res.send(data))
      .catch(error => {
        console.error(error)
        throw error;
      });

  });
  app.get('/api/todo/:id', (req, res) => {
    console.log(':id', req.params);
    Todos.findById({ _id: req.params.id })
      .then(data => res.send(data))
      .catch(error => {
        console.log(error);
        throw error;
      })
  })

  app.post('/api/todo', (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachement: req.body.hasAttachement,
      })
        .then(data => res.send('success'))
        .catch(err => {
          throw err
        })
    }
    else {
      const newTodo = Todos({
        username: req.body.username,
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachement: req.body.hasAttachement,

      })
      newTodo.save()
        .then(data => res.send('success'))
        .catch(err => {
          throw err
        })
    }
  });

  app.delete('/api/todo', (req, res) => {
    Todos.findByIdAndDelete(req.body.id)
      .then(data => res.send('successfully deleted'))
      .catch(err => {
        throw err
      })
  })

}