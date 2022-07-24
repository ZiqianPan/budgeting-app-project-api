const express = require("express");
const budgets = express.Router();

const budgetData = require("../models/budget-Data");

budgets.get("/", (req, res) => {
    res.json(budgetData);
});

budgets.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;

    if (budgetData[arrayIndex]) {
        res.json(budgetData[arrayIndex])
    } else {
        res.redirect('/budgets')
    } 
})

budgets.post("/", (req, res) => {
    budgetData.push(req.body);
    res.json(budgetData[budgetData.length - 1]);
});

budgets.delete("/:arrayIndex", (req, res) => {
    const {arrayIndex} = req.params;
    const deletebudget = budgetData.splice(arrayIndex, 1);
    res.status(200).json(deletebudget)
});

budgets.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    budgetData[arrayIndex] = req.body
    res.status(200).json(budgetData[arrayIndex])
});


module.exports = budgets;