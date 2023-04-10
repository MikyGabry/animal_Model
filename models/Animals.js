const mongoose = require('mongoose');

const animalsSchema = new mongoose.Schema(
    {
        species: {
            type: String,
            require: [true, "It must have a specie"]
        },
        extinct: {
            type: Boolean,
            default: false
        },
        location: {
            type: Array,
            require: [true, "Let us know at list one lovation"]
        },
        lifeExpectancy: {
            type: Number,
            min: 1,
            max: 5000
        },
        img: {
            type: String, //Si deve mettere per forza?
            require: [true, "Find an immage of this specie"]
        }
    },
    {
        timestamps: true
    }
)

const Animals = mongoose.model('animal', animalsSchema)

module.exports = Animals;