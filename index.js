const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config();
 const cors = require('cors');
 const connection = require('./db')
 const jwt =  require("jsonwebtoken");
 const secret_key=process.env.SECRET_KEY
 const userMOdel = require("./MODELS/userModel")
const  app = express();
app.use(express.json())
 app.use(express.text())
const PORT = process.env.PORT || 8500;
app.use(urlencoded({extended:true}))
 


        app.get('/', (req, res)=>{
            res.send("Welcome to depeloyed apge") 
        })
         app.post("/login", async (req , res)=>{
            const {username , email} = req.body;
           const user =  await   userMOdel.find({$or:[{email:email} , {username:username}]});
             console.log(user)
            const jwt_token = jwt.sign({user} , secret_key ) 
            if(user.length>=1){
                    res.status(201).send({message :"login sucessful",token:jwt_token})
            }else{
              res.status(401).send({message: 'oops user is not registred please sign up first'})
            }
        })
        app.post("/signup", async (req, res)=>{
            const user =  await   userMOdel( req.body)
            user.save((err , sucess)=>{
                    if(err){
                        res.status(500).send({message:'oops something went wrong plz try again'})
                    }

                    res.status(200).send({message : "sign up sucessful"})
            })
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
