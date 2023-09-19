const Todos = require('../models/todo');

module.exports = (app) => {
  app.get('/api/setupTodos', async (req, res) => {
    const initialTodos = [
      {
        username: 'smaug',
        todo: 'hort gold',
        isDone: false,
        hasAttachement: false
      },
      {
        username: 'smaug',
        todo: 'kill dwarfs',
        isDone: false,
        hasAttachement: false
      },
      {
        username: 'Thrain',
        todo: 'fight dragon',
        isDone: true,
        hasAttachement: false
      },
      {
        username: 'Saruman',
        todo: 'sit in tower',
        isDone: false,
        hasAttachement: false
      }
    ];

    try {
      const result = await Todos.create(initialTodos);
      res.send(result)

    } catch (error) {
      console.error(error);
    }
  });


}