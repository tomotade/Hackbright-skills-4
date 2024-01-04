const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require("./controller");

app.get("/api/compliment", controller.getCompliment);

app.get("/api/fortune", controller.getFortune);

app.get("/api/baby", controller.getBaby);
app.get("/api/food", controller.getFood);
app.get("/api/car", controller.getCar);

app.listen(4000, () => console.log("Server running on 4000"));
