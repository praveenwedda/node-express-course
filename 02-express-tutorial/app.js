console.log("Express Tutorial");

const express = require('express')
const app = express()


app.get('/', (req,res)=>{
  res.send("Home page")
})

app.get('/about', (req,res)=>{
  res.status(404).send("About us page")
})

app.all('*', (req,res)=>{
  res.send("resource not found")
})

app.listen(5000, ()=>{
  console.log('server listening on port 5000');
})

