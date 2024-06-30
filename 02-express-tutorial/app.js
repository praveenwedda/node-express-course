console.log("Express Tutorial");

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

// app.get('/', (req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.get("/about", (req, res) => {
  res.send("About us page");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
