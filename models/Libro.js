const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(()=>console.log("conectado a la database"))
.catch(err => console.log("no se conecto"));
const LibroSchema = new mongoose.Schema({
titulo: String,
autor: String
}, { collection: 'libros' });
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;