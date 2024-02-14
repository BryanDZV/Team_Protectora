const Animal = require('../models/animal.model');
//---------------------------------INPUT---------------------------------

const getAnimals = async(req, res) => {
    try {        
        const allAnimals = await Animal.find();
       
        res.status(200).json(allAnimals);
        
    } catch (error) {
        return res.status(204).json(error);
    }
};

const getAnimalById = async(req, res) => {
    try {
        const {id} = req.params;
        const myAnimal = await Animal.findById(id);
        return res.status(200).json(myAnimal)
    } catch (error) {
        return res.status(204).json(error);
    }
};

const postAnimal = async (req,res) => {
    try {
        const newAnimal = new Animal(req.body);
        const inserted = await newAnimal.save();
        res.status(201).json(inserted)
    } catch (error) {
        return res.status(204).json(error);
    }
};

const postAnimals = async (req,res) => {
    try {
        const animals = req.body;
        const inserted = await Animal.insertMany(animals);
        res.status(201).json(inserted);
    } catch (error) {
        return res.status(204).json(error);
    }
};

const putAnimal = async(req, res) => {
    try {
        const {id} = req.params;
        const putNewAnimal = new Animal(req.body);
        putNewAnimal._id = id;
        const updatedAnimal = await Animal.findByIdAndUpdate(id, putNewAnimal, {new: true});
        return res.status(200).json(updatedAnimal);
    } catch (error) {
        return res.status(204).json(error);
    }
}

const deleteAnimal = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedAnimal = await Animal.findByIdAndDelete(id);
        return res.status(200).json(deletedAnimal);
    } catch (error) {
        return res.status(204).json(error);
    }
};


module.exports = {
    getAnimals,
    getAnimalById,
    postAnimal,
    putAnimal,
    deleteAnimal,
    postAnimals
}
