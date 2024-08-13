const Todo=require("../models/Todos")

exports.updateTodoById=async (req,res)=>{
    try{
        // const id=req.params.id;
        const {id,title,description}=req.body;
        const response=await Todo.findOneAndUpdate({_id: id},{title:title,description:description,updatedAt:Date.now()},{new:true});

        if(!response){
            console.log(response);
            res.status(404).json({
                success:false,
                message:"Todo Not found with given Id",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo Item updated Successfully",
        })
    }catch(e){
        console.log(e);
        res.status(400).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}