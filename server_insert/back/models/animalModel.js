const mongoose = require("mongoose");

// Definición del esquema
const animalSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  especie: { type: String, required: true },
  edad: { type: Number, required: true },
  genero: { type: String, required: true },
  ciudad: { type: String, required: true },
  tamaño: { type: String, required: true },
  nombre: { type: String, required: true },
  foto: { type: String, required: true }
},{
    timestamps:true
    // te genera la fecha de creacion del objeto y fecha de modificacion
});

// Creación del modelo
//const Animal = mongoose.model("Animal", animalSchema);
// Aquí especifica el nombre de la colección si ya tengo colecciones
const Animal = mongoose.model("Animal", animalSchema,"Animales");
module.exports = Animal;

