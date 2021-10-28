const Hero = require("../models/Hero");


const getHeroes = (req, res, next) => {
    
    Hero.find()
        .then(heroes => res.json(heroes))
        .catch(err => res.status(400).json(err));
};


const addHero = (req, res, next) => {
    const heroName = req.body.name;
    const heroAge = req.body.age;
    const heroHouse = req.body.house;
    const heroStamina = req.body.stamina;
    const heroAgility = req.body.agility;
    const heroIntellect = req.body.intellect;


    const hero = new Hero({
        name: heroName, 
        age: heroAge, 
        house: heroHouse, 
        stamina: heroStamina, 
        agility: heroAgility, 
        intellect: heroIntellect});

    hero.save()
        .then(result => {
            res.json("Hero is saved");
        })
        .catch(err => res.status(400).json(err));
};


module.exports = {
    getHeroes,
    addHero
}