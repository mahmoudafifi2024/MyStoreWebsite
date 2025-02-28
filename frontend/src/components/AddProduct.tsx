import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch,  useState } from "react";
import { Product } from "../utils/data";
import { createProduct } from "../api/products";

interface Props {
products: Product[];
setProducts: Dispatch<React.SetStateAction<Product[]>>;
}

const initialState = { name: "", description: "", price: 0 };

export default function AddProduct({ setProducts, products }: Props) {
const [formData, setFormData] = useState(initialState);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
    try {
    const data = await createProduct(formData);
    setProducts([...products, data]);
    setFormData(initialState);
    } catch (err) {
    console.log(err);
    }
};

return (
    <Paper
    sx={{
        width: 300,
        padding: 5,
        margin: "0 auto",
        marginTop: 5,
        gap: 1,
        display: "flex",
        flexDirection: "column",
    }}
    >
    <TextField
        value={formData.name}
        onChange={handleChange}
        name="name"
        label="Product Name"
        variant="outlined"
    />

    <TextField
        value={formData.description}
        onChange={handleChange}
        name="description"
        label="Description"
        variant="outlined"
    />

    <TextField
        value={formData.price}
        onChange={handleChange}
        name="price"
        label="Price"
        variant="outlined"
    />

    <Button onClick={handleSubmit} variant="contained">
        Add Product
    </Button>
    </Paper>
);
}