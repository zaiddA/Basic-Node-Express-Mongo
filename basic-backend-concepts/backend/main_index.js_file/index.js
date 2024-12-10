const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);
mongoose
  .connect("your mongodb connection string")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

//update a product
// app.patch("/api/products/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json("Product not found");
//     }
//     const updatedProduct = await Product.findById(req.params.id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

//delete a product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json("Product not found");
//     }
//     res.status(200).json({ product, message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json({ product, message: "Product created successfully" });
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });
