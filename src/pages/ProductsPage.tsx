import { ProductCard } from "@/components/shared/ProductCard";
import { ProductType } from "@/services/types";
import { FilterIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

type ProductsType = {
  products: ProductType[];
};

export default function ProductsPage() {
  const { products } = useLoaderData() as ProductsType;

  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);

  // debouncing implemented here
  // TODO: can be moved to a custom hook but only used here in this project so keeping it here
  const [search, setSearch] = useState("");
  useEffect(() => {
    let updatedProducts = [];
    if (search === "") {
      updatedProducts = products;
    } else {
      updatedProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    const timeout = setTimeout(() => {
      setFilteredProducts(updatedProducts);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, products]);

  const handleSortByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;

    if (sortBy === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price),
      );
    } else if (sortBy === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price),
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const [selectedCategories, setSelectedCategories] = useState({
    electronics: false,
    jewelery: false,
    "men's clothing": false,
    "women's clothing": false,
  });
  const handleSelectCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.name;
    if (e.target.checked) {
      setSelectedCategories((prev) => ({ ...prev, [category]: true }));
    } else {
      setSelectedCategories((prev) => ({ ...prev, [category]: false }));
    }
  };
  useEffect(() => {
    const selectedCategoriesArray = Object.keys(selectedCategories).filter(
      (key) => selectedCategories[key as keyof typeof selectedCategories],
    );
    if (selectedCategoriesArray.length === 0) {
      setFilteredProducts(products);
    } else {
      const updatedProducts = products.filter((item) =>
        selectedCategoriesArray.includes(item.category),
      );
      setFilteredProducts(updatedProducts);
    }
  }, [selectedCategories, products]);

  return (
    <div className="px-2 grid md:grid-cols-[250px_auto] gap-x-4 my-8 accent-primary">
      <aside className="md:border-r md:pr-4">
        <h2 className="text-xl inline-flex gap-2 items-center">
          <FilterIcon className="size-4" />
          Filter
        </h2>
        <div className="mt-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="border py-1 px-2 w-full rounded-md"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="mt-6 flex md:flex-col gap-4 flex-wrap">
          <div className="inline-flex gap-2 items-center">
            <input
              type="checkbox"
              name="electronics"
              id="electronics"
              className="accent-primary"
              onChange={handleSelectCategory}
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
          <div className="inline-flex gap-2 items-center">
            <input
              type="checkbox"
              name="jewelery"
              id="jewelery"
              className="accent-primary"
              onChange={handleSelectCategory}
            />
            <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div className="inline-flex gap-2 items-center">
            <input
              type="checkbox"
              name="men's clothing"
              id="men's clothing"
              className="accent-primary"
              onChange={handleSelectCategory}
            />
            <label htmlFor="men's clothing">Men&apos;s clothing</label>
          </div>
          <div className="inline-flex gap-2 items-center">
            <input
              type="checkbox"
              name="women's clothing"
              id="women's clothing"
              className="accent-primary"
              onChange={handleSelectCategory}
            />
            <label htmlFor="women's clothing">Women&apos;s clothing</label>
          </div>
        </div>
      </aside>
      <div className="mt-8 md:mt-0">
        <div className="flex justify-end">
          <select
            name="sortBy"
            id="sortBy"
            className="accent-primary px-2 py-1 rounded-md bg-primary/10 text-primary"
            onChange={handleSortByPrice}
          >
            <option value="">Sort by price</option>
            <option value="asc">Lowest To Highest Price</option>
            <option value="desc">Highest To Lowest Price</option>
          </select>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 grid-rows-[repeat(4, auto)]">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
