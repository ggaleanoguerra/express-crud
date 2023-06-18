const express = require('express')
const app = express()
const port = 3000

//Importar el archivo data.json
const users = require('./data.json')

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
  res.json(updateUser);
});

//Método DELETE para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  users.pop(user);
  res.json(user);
});


//Listen para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
