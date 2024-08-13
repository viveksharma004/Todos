const { response } = require("express");
const Todo=require("../models/Todos")

exports.deleteTodoById=async (req,res)=>{
    try{
        const id=req.body.id;
        const response=await Todo.findByIdAndDelete({_id:id});
        console.log(response._id," has been deleted from Todos");
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo with given Id has been Deleted Successfully",
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}