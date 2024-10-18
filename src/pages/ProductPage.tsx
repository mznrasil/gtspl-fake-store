import { Button } from "@/components/common/Button";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductType } from "@/services/types";
import { useCartStore } from "@/store/cart";
import { formatMoney } from "@/utils";
import { ShoppingBag, StarIcon } from "lucide-react";
import { useLoaderData } from "react-router-dom";

type ProductPageType = {
  product: ProductType;
  products: ProductType[];
};

export default function ProductPage() {
  const { product, products } = useLoaderData() as ProductPageType;
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <section className="mt-2 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <div className="border p-8">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain size-[400px] md:size-[600px]"
          />
        </div>
        <div>
          <p className="uppercase text-sm bg-primary/10 text-primary px-4 py-1 rounded-full w-fit font-semibold">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <p className="text-3xl mt-2 text-gray-600">
            {formatMoney(product.price)}
          </p>
          <div className="mt-3 flex items-center gap-1 text-slate-500">
            <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
            {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <p className="text-base text-gray-700 mt-6">{product.description}</p>

          <Button className="mt-6 w-full py-3" onClick={handleAddToCart}>
            <ShoppingBag className="size-5" />
            Add to cart
          </Button>
        </div>
      </div>

      <div className="my-12 md:my-24">
        <h2 className="text-2xl md:text-4xl font-semibold">Related Products</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 grid-rows-[repeat(4, auto)]">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
