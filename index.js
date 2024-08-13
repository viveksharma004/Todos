const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||4000;
// const bodyParser=require("body-parser")
// app.use(bodyParser.json());
app.use(express.json());


//starting server
app.listen(PORT,()=>{
    console.log(`Server is Live at ${PORT}`);
})

const dbConnect=require("./config/dbConnect");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1> This is Homepage</h1>`);
})
const todoRoutes=require("./routes/todo")
// mount the todo api route with versioning and api
app.use("/api/v1",todoRoutes);


// const {createTodo}=require("./controllers/createTodo")
// app.post("/createTodo",createTodo);













// app.get("/getPost",(req,res)=>{
//     const {title,description}=req.body;
//     console.log(title);
//     console.log(description);
//     res.send("mission accomplished");
// })

