const router = require("express").Router();

const House = require("../models/Houses");


router.get("/", (req, res, next) => {

    House.find()
        .then(houses => res.json(houses))
        .catch(err => res.status(400).json(err));
});


router.post("/add", (req, res, next) => {

    const houseName = req.body.name;
    const houseSigil = req.body.sigil;
    const houseSlogen = req.body.slogen;

    const house = new House({
        name: houseName,
        sigil: houseSigil,
        slogen: houseSlogen
    });

    house.save()
        .then(result => {
            res.json("House is saved");
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;