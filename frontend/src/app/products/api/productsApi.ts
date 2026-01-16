import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "https://6969a4813a2b2151f845d924.mockapi.io/products";

export interface FetchProductsParams {
  page: number;
  limit: number;
  search?: string;
}

export interface FetchProductsResponse {
  products: Product[];
  total: number;
}

export async function fetchProducts({
  page,
  limit,
  search,
}: FetchProductsParams): Promise<FetchProductsResponse> {
  try {
    const response = await axios.get<Product[]>(API_URL, {
      params: {
        page,
        limit,
        name: search || undefined,
      },
    });
    console.log(response.data);
    const countResponse = await axios.get<Product[]>(API_URL, {
      params: {
        name: search || undefined,
      },
    });

    return {
      products: response.data,
      total: countResponse.data.length,
    };
  } catch (error) {
    console.error(error);
    throw new Error("No se pudieron cargar los productos");
  }
}
