const express = require("express");
const router = express.Router();
const {
  getAnimals,
  createAnimal,
  getIndividualAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animalController");

router.route("/").get(getAnimals).post(createAnimal);

router
  .route("/:id")
  .get(getIndividualAnimal)
  .put(updateAnimal)
  .delete(deleteAnimal);

module.exports = router;
