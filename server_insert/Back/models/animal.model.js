const mongoose = require('mongoose');

const animalSchema = mongoose.Schema(
    {
        "especie": [{
            type:'String', 
            required:true, 
            enum:[ 
                "Perro", 
                "Gato", 
                "Conejo", 
                "Cobaya", 
                "Pequeño mamífero", 
                "Hurón", 
                "Pez", 
                "Reptil", 
                "Anfibio", 
                "Arácnido o insecto", 
                "Ave"
            ]
        },{ type: 'string'}
        ], 
        "image":{
        type:'string',
        required: true
        },
        "imagenes":[{
            type:'String',
            required: false
        }],
        "fechaDeNacimiento": {
            type:'String', 
            required:true
        },
        "sexo": {
            type:'String', 
            required:true,
            enum: [
                "Hembra",
                "Macho"
            ]
        },
        "tamaño": {
            type:'string', 
            required:true,
            enum: [
                "Pequeño",
                "Mediano",
                "Grande"
            ]
        },
        "edad": {
            type:'string', 
            required:true,
            enum: [
                "Cachorro",
                "Jóven",
                "Adulto"
            ]
        },
        "peso": {
            type:'Number', 
            required:true
        },
        "vacunado": {
            type:'Boolean', 
            required:true
        },
        "desparasitado": {
            type:'Boolean', 
            required:true
        },
        "sano": {
            type:'Boolean', 
            required:true
        },
        "esterilizado": {
            type:'Boolean', 
            required:true
        },
        "identificado": {
            type:'Boolean', 
            required:true
        },
        "microchip": {
            type:'Boolean', 
            required:true
        },
        "nombre": {
            type:'String', 
            required:true
        },
        "ubicacion": {
            type:'String', 
            required:true
        },
        "ciudad": {
            type:'String', 
            required:true
        },
        "personalidad":[{
            type:'String',
            required: true
        }],
        "historia":{
            type:'String',
            required: false
        },
        "aSaber":{
            type:'String',
            required: false
        },
        requisitosAdopcion:{
            type:'String',
            required: false
        },
        tasaAdopcion:{
            type:'Number',
            required: false
        },
        seEnvia:{
            type:'String',
            required: false
        },
        "adoptionState": {
            type:'string', 
            required:true,
            enum: [
                "Aceptado",
                "En proceso",
                "Denegado"
            ]
        },
    },
    {timestamps:true}
);


const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;