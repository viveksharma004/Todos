const Todo=require("../models/Todos");

const getTodoById=async (req,res)=>{
    try{
        console.log(req.params);
        const todoId=req.params.id;
        const response=await Todo.findById(todoId);

        if(!response){
            return res.status(404).json({
                success: false,
                message:"Not Found",
            })
        }

        res.status(200).json({
            success: true,
            data: response,
            message: "Single Data fetched Successfully",
        })

    }catch(e){
        res.status(400).json({
            success: false,
            message: e.message,
        })
    }
}
module.exports=getTodoById;