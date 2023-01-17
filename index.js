const { urlencoded } = require('express');
const express = require('express');
 const cors = require('cors');
 const connection = require('./db')
 const jwt =  require("jsonwebtoken");
 const secret_key="avshN^*F259HxksJP55(2.)&YFCs89$^%&**(HB"
 const userMOdel = require("./MODELS/userModel")
 require('dotenv').config();
const  app = express();
app.use(express.json())
 app.use(express.text())
const PORT = process.env.PORT || 8500;
app.use(urlencoded({extended:true}))
 


app.get('/', (req, res)=>{
    res.send("Welcome to depeloyed apge") 
})



   app.post("/signup", async (req, res)=>{
         const  dataFromClient = req.body;
    const user =  await   userMOdel(dataFromClient)
    user.save((err , sucess)=>{
       if(err){
        console.log(err)
       }
       res.status(200).send({message : "data savavd to data bases"})
    })
       console.log("data saved ")
   })

app.listen(PORT, async ()=>{
     try{
       await connection;
       console.log("conneted to data base")
     }catch(err){
           console.log("connetion data base error")
          console.log(err)
        } 
    console.log(`Suvcessfully Runnig On ${PORT}`)
  })
