import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
name: string;
description?: string;
price: number;
}

const productSchema: Schema = new Schema(
{
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
},
{ timestamps: true }
);


export const productModel = mongoose.model<IProduct>("myproducts", productSchema);
