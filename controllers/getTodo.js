const Todo=require("../models/Todos")

exports.getTodo=async (req,res)=>{
    try{
        const response=await Todo.find();
        const {title,description}=response;
        // response is in the array format
        //console.log(response);
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"All the Todos are Fetched Successfully",
            }
        )
    }
    catch(e){
        res.status(400).send(
            {
                message: e.message,
            }
        )
    }
}
