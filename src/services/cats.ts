import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  Cat,
  PaginationParams,
  ErrorResponse,
  PaginatedResponse,
  SuccessfulResponse,
} from "@/types";

type CatsResponse = PaginatedResponse<Cat> | ErrorResponse;
type CatResponse = (SuccessfulResponse & Cat) | ErrorResponse;

export const getCats = async (params?: PaginationParams): Promise<CatsResponse> => {
  const searchParams = new URLSearchParams(params);
  const url = `${API_ENDPOINTS.getCats}?${searchParams.toString()}`;

  try {
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};

export const getCat = async (id: number): Promise<CatResponse> => {
  const url = API_ENDPOINTS.getCat.replace(":id", String(id));

  try {
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};

export const createCat = async (cat: Cat): Promise<CatResponse> => {
  const url = API_ENDPOINTS.createCat;

  try {
    const response = await fetchExtended(url, { method: "POST", body: JSON.stringify(cat) });
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};
