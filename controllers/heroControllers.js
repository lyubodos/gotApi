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


const getHero = (req, res, next) => {
    const heroId = req.params.id;

    Hero.findById(heroId)
    .then(hero => {
        res.json(hero);
    })
    .catch (err => res.status(400).json(err));
}


const addHero = (req, res, next) => {
    const heroName = req.body.name;
    const alliasName = req.body.allias;
    const description = req.body.description;
    const heroImage = req.body.imageUrl;
    const heroAge = req.body.age;
    const heroHouse = req.body.house;
    const heroStrength = req.body.strength;
    const heroStamina = req.body.stamina;
    const heroAgility = req.body.agility;
    const heroIntellect = req.body.intellect;


    const hero = new Hero({
        name: heroName,
        allias: alliasName,
        description: description,
        imageUrl: heroImage,
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

    const hero = {
        name: req.body.name,
        allias: req.body.allias,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        age: req.body.age,
        house: req.body.house,
        strength: req.body.strength,
        stamina: req.body.stamina,
        agility: req.body.agility,
        intellect: req.body.intellect
    }

    Hero.findByIdAndUpdate(exId, hero)
        .then(hero => {
           res.json(`${hero.name} has been updated!`)
        })
        .catch(err => res.status(400).json(err));
};

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
    getHero,
    getHeroes,
    addHero,
    editHero,
    deleteHero
}