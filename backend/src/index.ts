import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routers/products";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const frontendUrl = process.env.CLIENT_URL;

console.log(mongoUri)
console.log(frontendUrl)

if (!mongoUri || !frontendUrl) {
    console.error("Missing required environment variables: MONGO_URI or CLIENT_URL");
    process.exit(1);
}

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
