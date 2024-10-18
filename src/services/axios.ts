import axios from "axios";

const ONE_MINUTE = 1 * 60 * 1000;

export const Api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: ONE_MINUTE,
});

// create a helper function which handles error in a try catch block and returns the response
// This function should handle all types of error such as AxiosError, Error and any other error
export const handleApiError = async <T>(promise: Promise<T>): Promise<T> => {
  try {
    return await promise;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("AxiosError: ", error.message);
    } else if (error instanceof Error) {
      console.error("Error: ", error.message);
    } else {
      console.error("Unknown Error: ", error);
    }
    throw error;
  }
};

export const callApi = <T>(promise: Promise<T>): Promise<T> => {
  return handleApiError(promise);
};
