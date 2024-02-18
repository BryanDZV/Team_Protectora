const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = mongoose.Schema(
    {
        name: {type: String, required:true},
        email: {type: String, required:true},
        telf: {type:Number,required:false},
        dni: {type: String, required:false},
        direction: {type: String, required:false},
        postal: {type: Number, required:false},
        city: {type: String, required:false},
        conditions: {type: String, required:false},
        pets: {type: String, required:false},
        which: {type: String, required:false},
        petfrienly: {type: String, required:false},
        needs: {type: String, required:false},
        expenses: {type: String, required:false},
        food: {type: String, required:false},
        home: {type: String, required:false},
        rental: {type: String, required:false},
        casero: {type: String, required:false},
        removal: {type: String, required:false},
        garden: {type: String, required:false},
        family: {type: String, required:false},
        agreement: {type: String, required:false},
        visit: {type: String, required:false},
        
    },
    {timestamps:true}
);


const form = mongoose.model('form',formSchema);

module.exports = form;