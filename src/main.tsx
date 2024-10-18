import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "@/components/common/ErrorPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import {
  getAllCategories,
  getProductsByCategory,
} from "@/services/categories.ts";
import { getAllProducts, getProductById } from "./services/products.ts";
import ProductPage from "@/pages/ProductPage.tsx";
import ProductsPage from "@/pages/ProductsPage.tsx";
import CartPage from "@/pages/CartPage.tsx";
import CheckoutPage from "@/pages/CheckoutPage.tsx";
import CategoryProductsPage from "@/pages/CategoryProducts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          const [categories, products] = await Promise.all([
            getAllCategories(),
            getAllProducts(6),
          ]);
          return { categories, products };
        },
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: async ({ request }) => {
          const category = new URL(request.url).searchParams.get("category");
          if (category) {
            return {
              data: await getProductsByCategory(category),
            };
          }
          const products = await getAllProducts();
          return { products };
        },
      },
      {
        path: "/products/:productId",
        element: <ProductPage />,
        loader: async ({ params }) => {
          if (!params?.productId) {
            throw new Error("Product Id is required");
          }
          const product = await getProductById(params.productId);
          const products = await getProductsByCategory(product.category);
          return { products, product };
        },
      },
      {
        path: "/category/:category/products",
        element: <CategoryProductsPage />,
        loader: async ({ params }) => {
          const category = params?.category;
          const categories = await getAllCategories();
          if (category && categories.some((item) => item.name === category)) {
            const products = await getProductsByCategory(category);
            return { products };
          }
          throw new Error("Category not found");
        },
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
