const mongoose = require('mongoose');

const animalsSchema = new mongoose.Schema(
    {
        species: {
            type: String,
            require: [true, "It must have a specie"]
        },
        extinct: {
            type: Boolean,
            // default: false
        },
        location: {
            type: Array,
            require: [true, "Let us know at list one lovation"]
        },
        lifeExpectancy: {
            type: Number,
            // min: 1,
            // max: 5000
        }
    },
    {
        timestamps: true
    }
)

const Animals = mongoose.model('animal', animalsSchema)

module.exports = Animals;