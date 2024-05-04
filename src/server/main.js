import express from "express";
import ViteExpress from "vite-express";
import products from './data.js'

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get('/api/products', (req, res) => {
  res.json(products)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
