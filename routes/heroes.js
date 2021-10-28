const router = require("express").Router();

const heroController = require("../controllers/heroControllers");


router.get("/", heroController.getHeroes); 

router.post("/add", heroController.addHero);

router.delete("/:id", heroController.deleteHero);




module.exports = router;