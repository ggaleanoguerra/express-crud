const { app } = require('./bin/routes')
const port = 3000
//Listen para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
