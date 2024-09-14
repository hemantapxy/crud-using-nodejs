const express = require("express");
const router = express.Router();

//import controlller

const {createTodo} = require("../controlers/createTodo");

//define Api routes

router.post("/createTodo",createTodo);

module.exports = router;
