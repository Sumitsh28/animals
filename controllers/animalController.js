const asyncHandler = require("express-async-handler");
const Animal = require("../models/animalModel");

const getAnimals = asyncHandler(async (req, res) => {
  const animals = await Animal.find();
  res.status(200).json(animals);
});

const createAnimal = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);

  const { name, type, origin } = req.body;

  if (!name || !type || !origin) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const animal = await Animal.create({
    name,
    type,
    origin,
  });
  res.status(201).json(animal);
});

const getIndividualAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);
  if (!animal) {
    res.status(404);
    throw new Error("Animal not found");
  }
  res.status(200).json(animal);
});

const updateAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);
  if (!animal) {
    res.status(404);
    throw new Error("Animal not found");
  }

  const updatedAnimal = await Animal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedAnimal);
});

const deleteAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);
  if (!animal) {
    res.status(404);
    throw new Error("Animal not found");
  }

  await Animal.deleteOne();

  res.status(200).json(animal);
});

module.exports = {
  getAnimals,
  createAnimal,
  getIndividualAnimal,
  updateAnimal,
  deleteAnimal,
};
