import { Api, callApi } from "./axios";
import { Endpoint } from "./endpoint";
import { type ProductType } from "./types";

export const getAllProducts = async (limit?: number) => {
  return await callApi(
    Api.get<Array<ProductType>>(Endpoint.Products.getAll, {
      params: { limit },
    }).then((response) => response.data),
  );
};

export const getProductById = async (productId: string) => {
  return await callApi(
    Api.get<ProductType>(
      Endpoint.Products.getById.replace(":productId", productId),
    ).then((response) => response.data),
  );
};
