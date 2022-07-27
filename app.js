const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const budgetController = require("./controllers/budgetController");

app.get("/", (req, res) => {
    res.send("welcome to the Budget App Project!!")
});

app.use("/transactions", budgetController);


app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})


module.exports = app;