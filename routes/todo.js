const express=require("express");
const router=express.Router();

//import controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const getTodoById = require("../controllers/getTodoById");
const {updateTodoById} = require("../controllers/updateTodoById");
const {deleteTodoById} = require("../controllers/deleteTodoById");

//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodoById/:id",getTodoById);
router.put("/updateTodoById",updateTodoById);
router.delete("/deleteTodoById",deleteTodoById);

module.exports=router;