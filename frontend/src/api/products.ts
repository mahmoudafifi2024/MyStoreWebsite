import { Product } from "../utils/data";


const BASE_URL = "http://localhost:5002";

export const fetchProducts = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
            throw new Error(`${response.statusText} : ${response.status}`);
        }
        
        return await response.json();
    } catch (err) {
        throw err;
    }
};

export const createProduct = async (data: Product) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (!response.ok) {
            throw new Error(`${response.statusText} : ${response.status}`);
        }
        
        return await response.json();
    } catch (err) {
        throw err;
    }
};
