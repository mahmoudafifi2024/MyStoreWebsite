import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routers/products";
import cors from "cors";



const app = express();
const port =  5002;
const mongoUri =  "mongodb://localhost:27017/my-store";
const frontendUrl =  "http://localhost:5173";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

mongoose
    .connect(mongoUri).then(() => console.log("Connected to MongoDB"));

app.use("/", productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
