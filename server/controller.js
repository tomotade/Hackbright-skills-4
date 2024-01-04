module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your JavaScript skills are stellar.",
    ];

    // choose a random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A good time to finish up old tasks.",
      "A lifetime of happiness lies ahead of you.",
      "A good friendship is often more important than a passionate romance.",
      "A fresh start will put you on your way.",
      "A faithful friend is a strong defense.",
    ];

    // choose a random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getBaby: (req, res) => {
    const babys = ["TOM.", "TAIWO.", "OPE.", "JOHN.", "SEYI."];
    // choose a random BABY names
    let randomIndex = Math.floor(Math.random() * babys.length);
    let randomBaby = babys[randomIndex];
    res.status(200).send(randomBaby);
  },

  getFood: (req, res) => {
    const foods = ["RICE.", "PIZZA.", "BREAD.", "WINGS.", "BEANS."];

    // choose a random food
    let randomIndex = Math.floor(Math.random() * foods.length);
    let randomFood = foods[randomIndex];

    res.status(200).send(randomFood);
  },

  getCar: (req, res) => {
    const cars = ["Toyota.", "BENZ.", "AUDI.", "LEXUS.", "VOLVO."];

    // choose a random cars
    let randomIndex = Math.floor(Math.random() * cars.length);
    let randomCars = cars[randomIndex];

    res.status(200).send(randomCars);
  },
};
