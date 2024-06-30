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

  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  res.status(200).json(sortedProducts);
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server listening to port 5000");
});
