const { urlencoded } = require('express');
const express = require('express')
 require('dotenv').config();
const  app = express();
 app.use(express.json())
 app.use(express.json())
 const PORT = process.env.PORT || 8500;

 app.use(urlencoded({extended:true}))
app.get('/', (req, res)=>{
    res.send("Welcome to depeloyed apge") 
})

app.listen(PORT, ()=>{
    console.log(`Suvcessfully Runnig On ${PORT}`)
  })