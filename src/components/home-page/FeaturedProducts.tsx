import { type ProductType } from "@/services/types";
import { Link, useLoaderData } from "react-router-dom";
import { ProductCard } from "@/components/shared/ProductCard";

type ProductsType = {
  products: ProductType[];
};

export const FeaturedProducts = () => {
  const { products } = useLoaderData() as ProductsType;

  return (
    <section className="my-12 md:my-48">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Featured Products</h2>
        <Link to="/products" className="text-primary hidden md:flex">
          View All &rarr;
        </Link>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 grid-rows-[repeat(4, auto)]">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link to="/products" className="text-primary flex md:hidden">
          View All&nbsp;&nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
};
