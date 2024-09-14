//import th model

const Todo = require("../models/Todo");

//define route handler

const createTodo = async(req,res)=>{
    try{
        //extracy title and description from request body
         const {title,description}=req.body;
         //create new Todo object and insert in DB

         const response = await Todo.create({title,description});
         res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created succssfully"
            }
         );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}



module.exports =  {createTodo}