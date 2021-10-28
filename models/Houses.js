const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const houseModel = new Schema({
    name: {
        type: String,
        allowNull: false,
        required: true,
        unique: true
    },

    sigil: {
        type: String,
        allowNull: false,
        required: true,
    },

    slogen: {
        type: String,
        allowNull: false,
    }

});

const House = mongoose.model("House", houseModel);

module.exports = House;