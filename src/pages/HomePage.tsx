import { Banner } from "@/components/home-page/Banner";
import { FeaturedProducts } from "@/components/home-page/FeaturedProducts";
import { ShopByCategory } from "@/components/home-page/ShopByCategory";

export default function HomePage() {
  return (
    <div className="w-full">
      <Banner />
      <ShopByCategory />
      <FeaturedProducts />
    </div>
  );
}
