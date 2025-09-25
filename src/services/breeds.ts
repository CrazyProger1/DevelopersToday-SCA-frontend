import { Breed, ErrorResponse, PaginatedResponse, PaginationParams } from "@/types";
import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";

type BreedsResponse = PaginatedResponse<Breed> | ErrorResponse;

export const getBreeds = async (params?: PaginationParams): Promise<BreedsResponse> => {
  const searchParams = new URLSearchParams(params);
  const url = `${API_ENDPOINTS.getBreeds}?${searchParams.toString()}`;

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
