const mongoose = require("mongoose");
// const Animal = require("../back/models/animalModel")
const DB_URL =process.env.DB_URL;// mongodb+srv://usuario:contraseña@cluster0.zqnzqqp.mongodb.net/nombredevuestroproyecto

const connect = async () => {
  try {
    // conectamos a nuestra BBDD
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`conectado correctamente a base de datos de ${name} db en el host ${host}`);
  } catch (error) {
    console.log("hemos tenido un error al conectar a la BBDD", error);
  }

  // Animal.find({})
  // .then(animales => {
  //   // console.log("Animales encontrados:", animales);
  // })
  
  // .catch(err => {
  //   console.error("Error al obtener datoso:", err);
  // });
};
module.exports = {connect};
