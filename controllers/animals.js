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

router.get('/:id', async (req, res, next) => {
    try {
        const myAnimals = await animals.findById(req.params.id);
        res.render('animals/show.ejs', {animal: myAnimals})
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;