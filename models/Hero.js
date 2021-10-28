const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const heroSChema = new Schema({
    name: {
        type: String,
        allowNull: false,
        required: true,
        unique: true,
       
    },

    age: {
        type: Number,
        allowNull: false,
        required: true
        
    },

    house: {
        type: String,
        allowNull: false,
        required: true
    },

    strength: {
        type: Number,
        allowNull: false,
        required: true
    },

    stamina: {
        type: Number,
        allowNull: false,
        required: true
    },

    agility: {
        type: Number,
        allowNull: false,
        required: true
    },

    intellect: {
        type: Number,
        allowNull: false,
        required: true
    },
});

const Hero = mongoose.model("Hero", heroSChema);

module.exports = Hero;