import { Api, callApi } from "./axios";
import { Endpoint } from "./endpoint";
import ElectronicsCategory from "@/assets/electronics-category.avif";
import JewelryCategory from "@/assets/jewelry-category.avif";
import MensClothingCategory from "@/assets/mens-clothing-category.avif";
import WomensClothingCategory from "@/assets/womens-clothing-category.avif";
import { type ProductType } from "./types";

const CategoryImagesMap = {
  electronics: ElectronicsCategory,
  jewelery: JewelryCategory,
  "men's clothing": MensClothingCategory,
  "women's clothing": WomensClothingCategory,
};

export const getAllCategories = async () => {
  return await callApi(
    Api.get<Array<string>>(Endpoint.Categories.getAll).then((response) =>
      response.data.map((item) => ({
        name: item,
        image:
          CategoryImagesMap[
            item.toLowerCase() as keyof typeof CategoryImagesMap
          ],
      })),
    ),
  );
};

export const getProductsByCategory = async (category: string) => {
  return await callApi(
    Api.get<Array<ProductType>>(
      Endpoint.Categories.getProductByCategory.replace(":category", category),
    ).then((response) => response.data),
  );
};
