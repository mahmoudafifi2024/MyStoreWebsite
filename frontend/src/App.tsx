import { useEffect, useState } from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductTable from "./components/ProductTable";
import { data, Product } from "./utils/data";
import { fetchProducts } from "./api/products";
import { Button } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>(data);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductTable products={products} />} />
        <Route path="/add" element={<AddProduct products={products} setProducts={setProducts} />} />
      </Routes>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px" }}>
        <Button variant="contained">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>Product List</Link>
        </Button>
        <Button variant="contained">
          <Link to="/add" style={{ textDecoration: "none", color: "white" }}>Add Product</Link>
        </Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
