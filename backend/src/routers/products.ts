import express from "express";
import { productModel } from "../models/product";

const router = express.Router();

// READ
router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch {
    res.status(500).send("Something is WRONG");
  }
});

// CREATE
router.post("/", async (req, res) => {
  const data = req.body;
  console.log({ data });
  const newProduct = await productModel.create(data);
  res.status(201).send(newProduct);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const product = await productModel.findByIdAndUpdate(id, data, { new: true });

  if (!product) {
    res.status(404).send("Product NOT Found");
  } else {
    res.send(product);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productModel.findByIdAndDelete(id);

  if (!product) {
    res.status(404).send("Product NOT Found");
  } else {
    res.send("DELETED");
  }
});

export default router;