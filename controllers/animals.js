const { resolveInclude } = require('ejs');
const express = require('express');
const router = express.Router();
const {animals} = require('../models')

router.get('', async (req, res, next) => {
    try {
        const myAnimals = await animals.find({});
        console.log(myAnimals);
        res.render('animals/index', {animals: myAnimals})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/new', (req, res) => {
    res.render("animals/new.ejs")
})

router.get('/:id', async (req, res, next) => {
    try {
        const myAnimals = await animals.findById(req.params.id);
        res.render('animals/show.ejs', {animal: myAnimals})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try{
        let newAnimal = req.body
        if (!newAnimal.extinct) {
            newAnimal.extinct = false
        }
        const myAnimals = await animals.create(newAnimal)
        console.log(req.body)
        res.redirect('/animals')
    } catch(err) {
        console.log(err)
        next()
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try{
        const animalToBeEdited = await animals.findById(req.params.id);
        console.log(animalToBeEdited);
        res.render('animals/edit.ejs', {animal : animalToBeEdited})
    } catch(err) {
        console.log(err);
        next()
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        const updatedSpecie = await animals.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedSpecie);
        res.redirect(`/animals/${req.params.id}`)
    } catch(err) {
        console.log(err);
        next()
    }
})

router.get('/:id/delete', async (req, res, next) => {
    try {
        const specieToBeDeleted = await animals.findById(req.params.id);
        console.log(specieToBeDeleted);
        res.render('animals/delete.ejs', {animal : specieToBeDeleted})
    } catch(err) {
        console.log(err);
        next()
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteSpecie = await animals.findByIdAndDelete(req.params.id);
        console.log(deleteSpecie);
        res.redirect('/animals');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;