//import the model
const todos=require("../models/Todos");

// define the router
exports.createTodo=async (req,res)=>{
    try{
        //extract data from body
        const {title,description}=req.body;
        //create new todo obj and insert in dbms
        console.log(title,description);

        // Two ways to create an object in the DB
        // const doc=new todos({title,description});
        // const response=await doc.save();
        const response=await todos.create({title,description});
        //send response json format
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully",
            }
        )
    }catch(error){
        console.error(error);
        // console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message,
            }
        )
    }

}