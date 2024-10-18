import { ProductCard } from "@/components/shared/ProductCard";
import { type ProductType } from "@/services/types";
import { useLoaderData } from "react-router-dom";

type ProductsType = {
  products: ProductType[];
};

export default function CategoryProductsPage() {
  const { products } = useLoaderData() as ProductsType;

  return (
    <section className="my-8">
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 grid-rows-[repeat(4, auto)]">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
