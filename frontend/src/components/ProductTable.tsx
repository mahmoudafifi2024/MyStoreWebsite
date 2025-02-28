import { Product } from "../utils/data";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";

interface Props {
products: Product[];
}

export default function ProductTable({ products }: Props) {
useEffect(() => {
    console.log("Product list updated");
    if (products.length === 20) {
    console.log("Maximum products reached");
    }
}, [products.length]);

return (
    <TableContainer sx={{ margin: "50px auto", width: 800 }} component={Paper}>
    <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {products.map((item, index) => (
            <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
);
}