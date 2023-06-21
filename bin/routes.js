const express = require('express')
const app = express()

//Importar el archivo controller.js
const { controller } = require('./Controller.js')


//Importar el archivo data.json
const users = require('../data.json')

//App.use para que el servidor pueda leer el archivo data.json
app.use(express.json());

//Métdodo GET con un texto plano
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//Método GET con un objeto JSON
app.get('/users', (req, res) => {
  res.json(users)
})

//Método GET para obtener un usuario por su id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
    if (!user) res.status(404).send('No se puede mostrar el usuario porque no existe');
  res.json(user)});

//Método POST para crear un nuevo usuario
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

//Método PUT para actualizar un usuario
app.put('/users/:id', (req, res) => {
  const updateUser = req.body;
  users.push(updateUser);
  if (!user) res.status(404).send('El id de este usuario no fe encontrado o no existe');
  res.json(updateUser);
});

//Método DELETE para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  users.pop(user);
  if (!user) res.status(404).send('No se puede borrar el usuario porque ya fue eliminado o no existe');
  res.json(user);
});

exports.app = app;