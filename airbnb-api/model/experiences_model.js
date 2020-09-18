const mongoose = require('mongoose')
const { Schema } = mongoose

//Se definide el schema de la coleccion en el constructor pasamos los campos y el tipo de valor que se requiere
const ExperiencesSchema = new Schema({
    image: String,
    title: String,
    description: String,
    place: String,
    users: Number,
    score: Number
})

//crea el nombre de la coleccion en la base de datos y define el schema de esa coleccion.
const ExperienceModel = mongoose.model('experiences', ExperiencesSchema)

module.exports = ExperienceModel