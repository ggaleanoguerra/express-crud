//Controlador de la base de datos

const mongoose = require('mongoose');

class Controller {
    constructor() {
        this.connect();
    }
    async connect() {
        try {
            await mongoose.connect(
                'mongodb+srv://admin:adminpasstodb@cluster0.r0rr7nd.mongodb.net/myDatabase?retryWrites=true&w=majority',
                { useNewUrlParser: true }

            );
            console.log('Conectado a la base de datos')

        }
        catch (e) {
            console.error(e)
        }
    }
}
exports.controller = new Controller();