const express = require('express')
const app = express()

//Importar el archivo controller.js
const { controllerUser } = require('./controllers/ControllerUsers')
const { controllerContent } = require('./controllers/ControllerContents')
const { controllerEvaluation } = require('./controllers/ControllerEvaluations')
const { controllerActivity } = require('./controllers/ControllerActivities')


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
  if (!user) res.status(404).send('No se puede mostrar el usuario con el id: ' + id + ' porque no existe');
  res.json(user)
});
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
  if (!user) res.status(404).send('El id ' + id + ' de este usuario no fe encontrado o no existe');
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


//USUARIOS
//Obtener todos los usuarios
app.get('/users', (req, res) => {
  controllerUser.getUsers(res);
});
//Obtener un usuario por su id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.getUser(res, id);
});

//Borrar todos los usuarios
app.delete('/users', (req, res) => {
  controllerUser.deleteUsers(res);
});

//Crear un usuario
app.post('/users', (req, res) => {
  controllerUser.createUser(res, req.body);
});

//Borrar un usuario por su id
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.deleteUser(res, id);
});

//Actualizar un usuario
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.updateUser(res, id, req.body);
});

//CONTENIDOS

//Obtener todos los contenidos
app.get('/content', (req, res) => {
  controllerContent.getContents(res);
});
// Obtener un contenido por su id
app.get('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.getContent(res, id);
});
// Eliminar un contenido por su id
app.delete('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.deleteContent(res, id);
});
// Eliminar todos los contenidos
app.delete('/content', (req, res) => {
  controllerContent.deleteContents(res);
});
// Crear un contenido
app.post('/content', (req, res) => {
  controllerContent.createContent(res, req.body);
});
// Actualizar un contenido
app.put('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.updateContent(res, id, req.body);
});

//EVALUACIONES

//Obtener todas las evaluaciones
app.get('/evaluation', (req, res) => {
  controllerEvaluation.getEvaluations(res);
});
// Obtener una evaluacion por su id
app.get('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.getEvaluation(res, id);
});
// Eliminar una evaluacion por su id
app.delete('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.deleteEvaluation(res, id);
});
// Eliminar todas las evaluaciones
app.delete('/evaluation', (req, res) => {
  controllerEvaluation.deleteEvaluations(res);
});
// Crear una evaluacion
app.post('/evaluation', (req, res) => {
  controllerEvaluation.createEvaluation(res, req.body);
});
// Actualizar una evaluacion
app.put('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.updateEvaluation(res, id, req.body);
});

//ACTIVIDADES

//Obtener todas las actividades
app.get('/activity', (req, res) => {
  controllerActivity.getActivities(res);
});
// Obtener una actividad por su id
app.get('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.getActivity(res, id);
});
// Eliminar una actividad por su id
app.delete('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.deleteActivity(res, id);
});
// Eliminar todas las actividades
app.delete('/activity', (req, res) => {
  controllerActivity.deleteActivities(res);
});
// Crear una actividad
app.post('/activity', (req, res) => {
  controllerActivity.createActivity(res, req.body);
});
// Actualizar una actividad
app.put('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.updateActivity(res, id, req.body);
});



exports.app = app;