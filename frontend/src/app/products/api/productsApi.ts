import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "https://6969a4813a2b2151f845d924.mockapi.io/products";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudieron cargar los productos");
  }
}
