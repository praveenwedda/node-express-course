console.log("Express Tutorial");

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href = /api/products/1>click me</a>");
});

app.get("/api/products/:productID", (req, res) => {
  // const newProducts = products.map((product) => {
  //   const { id, name, image } = product;
  //   return { id, name, image };
  // });
  console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("server listening to port 5000");
});
