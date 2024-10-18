import { type CategoryType } from "@/services/types";
import { Link, useLoaderData } from "react-router-dom";

type CategoriesType = {
  categories: CategoryType[];
};

export const ShopByCategory = () => {
  const { categories } = useLoaderData() as CategoriesType;
  console.log(categories);

  return (
    <section className="my-12 md:my-48">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Shop By Category</h2>
        <Link to="/product" className="text-primary hidden md:flex">
          View All&nbsp;&nbsp;&rarr;
        </Link>
      </div>
      <div className="mt-4 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name}/products`}
              key={category.name}
            >
              <div className="stack rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 md:h-96 object-cover"
                />
                <div className="bg-gradient-to-b from-transparent to-black/80 inset-0" />
                <div className="text-white self-end p-6">
                  <h3 className="text-md font-bold capitalize">
                    {category.name}
                  </h3>
                  <p className="text-sm">Shop Now &rarr;</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/products" className="text-primary flex md:hidden">
            View All&nbsp;&nbsp;&rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
