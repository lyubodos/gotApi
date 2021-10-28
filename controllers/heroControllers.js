const Hero = require("../models/Hero");


const getHeroes = (req, res, next) => {

    Hero.find()
        .then(heroes => {
            if (heroes.length > 0) {
                res.json(heroes)
        }else{
            res.json("Database is empty!")
        }
    })
        .catch (err => res.status(400).json(err));
};


const addHero = (req, res, next) => {
    const heroName = req.body.name;
    const heroAge = req.body.age;
    const heroHouse = req.body.house;
    const heroStrength = req.body.strength;
    const heroStamina = req.body.stamina;
    const heroAgility = req.body.agility;
    const heroIntellect = req.body.intellect;


    const hero = new Hero({
        name: heroName,
        age: heroAge,
        house: heroHouse,
        strength: heroStrength,
        stamina: heroStamina,
        agility: heroAgility,
        intellect: heroIntellect
    });

    hero.save()
        .then(result => {
            res.json("Hero is saved");
        })
        .catch(err => res.status(400).json(err));
};

const editHero = (req, res, next) => {
    const exId = req.params.id;

    const heroName = req.body.name;
    const heroAge = req.body.age;
    const heroHouse = req.body.house;
    const heroStrength = req.body.strength;
    const heroStamina = req.body.stamina;
    const heroAgility = req.body.agility;
    const heroIntellect = req.body.intellect;

    Hero.findById(exId)
        .then(hero => {
            hero.name = heroName;
            hero.age = heroAge;
            hero.house = heroHouse;
            hero.strength = heroStrength;
            hero.stamina = heroStamina;
            hero.agility = heroAgility;
            hero.intellect= heroIntellect;

            hero.save()
            .then(result => res.json(result))
        })
        .catch(err => res.status(400).json(err));
}

const deleteHero = (req, res, next) => {
    const exId = req.params.id;
    

    Hero.findById(exId)
        .then(result => {
            res.json(result);
            console.log(`${result.name} has been deleted!`);
        })
        .catch(err => res.status(400).json(err));
};

module.exports = {
    getHeroes,
    addHero,
    editHero,
    deleteHero
}