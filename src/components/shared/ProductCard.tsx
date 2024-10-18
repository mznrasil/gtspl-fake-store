import { type ProductType } from "@/services/types";
import { Button } from "@/components/common/Button";
import { Link } from "react-router-dom";
import { formatMoney } from "@/utils";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg grid grid-rows-subgrid row-span-4 gap-y-0">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-[300px] md:h-[400px]"
        />
      </div>

      <div className="flex justify-between items-center mt-2 row-start-2 row-end-3">
        <h2 className="font-semibold text-xl line-clamp-1">{product.title}</h2>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10">
          {formatMoney(product.price)}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {product.description}
      </p>
      <Button as={Link} to={`/products/${product.id}`} className="w-full mt-4">
        Learn More
      </Button>
    </div>
  );
}
