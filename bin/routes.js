const express = require('express')
const app = express()

//Importar el archivo controller.js
const { controllerUser } = require('./controllers/ControllerUsers')


//Importar el archivo data.json
const users = require('../data.json')

//App.use para que el servidor pueda leer el archivo data.json
app.use(express.json());

//Métdodo GET con un texto plano
app.get('/', (req, res) => {
    res.send('Hello World!')
  })






 //Local routes

//Método GET con un objeto JSON
app.get('/local-users', (req, res) => {
  res.json(users)
})
//Método GET para obtener un usuario por su id
app.get('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
    if (!user) res.status(404).send('No se puede mostrar el usuario con el id: ' + id +' porque no existe');
  res.json(user)});
//Método POST para crear un nuevo usuario
app.post('/local-users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});
//Método PUT para actualizar un usuario
app.put('/local-users/:id', (req, res) => {
  const updateUser = req.body;
  users.push(updateUser);
  if (!user) res.status(404).send('El id '+ id + ' de este usuario no fe encontrado o no existe');
  res.json(updateUser);
});
//Método DELETE para eliminar un usuario
app.delete('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  users.pop(user);
  if (!user) res.status(404).send('No se puede borrar el usuario con el id: ' + id + ' porque ya fue eliminado o no existe');
  res.json(user);
});






//MongoDB routes


//Obtener todos los usuarios
app.get('/users', (req, res) => {
    controllerUser.getUsers(res);
});

//Borrar todos los usuarios
app.delete('/users', (req, res) => {
    controllerUser.deleteUsers(res);
});

app.post('/users', (req, res) => {
    controllerUser.createUser(res, req.body);
});

exports.app = app;