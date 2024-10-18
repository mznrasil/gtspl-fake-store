import Logo from "@/assets/logo.svg?react";
import { useCartStore } from "@/store/cart";
import { HomeIcon, PackageIcon, ShoppingBagIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const DESKTOP_NAVIGATION = [
  {
    title: "All Products",
    to: "/products",
  },
  {
    title: "Electronics",
    to: "/category/electronics/products",
  },
  {
    title: "Jewelry",
    to: "/category/jewelery/products",
  },
  {
    title: "Men's Clothing",
    to: "/category/men's clothing/products",
  },
  {
    title: "Women's Clothing",
    to: "/category/women's clothing/products",
  },
];

const MOBILE_NAVIGATION = [
  {
    title: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    title: "Products",
    to: "/products",
    icon: PackageIcon,
  },
  {
    title: "Cart",
    to: "/cart",
    icon: ShoppingBagIcon,
  },
];

export const Navbar = () => {
  const { items } = useCartStore();

  return (
    <div className="flex justify-between items-center h-20 lg:sticky lg:top-0 bg-white z-50 shadow-sm">
      <div className="flex items-center gap-12">
        <Link to={"/"} className="flex items-center gap-2">
          <Logo className="flex shrink-0" />
          <h1 className="text-2xl font-bold">
            Fake
            <span className="text-primary">Store</span>
          </h1>
        </Link>

        {/* For Desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {DESKTOP_NAVIGATION.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* For Mobile */}
        <nav className="flex fixed bottom-0 inset-x-0 lg:hidden border border-t">
          <ul className="flex items-center justify-around w-full bg-white h-16 shadow-lg">
            {MOBILE_NAVIGATION.map((item) => (
              <li key={item.to} className="relative">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  <item.icon />
                  {item.title === "Cart" && (
                    <span className="absolute -top-3 -right-3 bg-primary font-semibold text-slate-200 p-2 rounded-full size-6 flex justify-center items-center">
                      {items.length}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex">
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "text-primary relative" : "hover:text-primary relative"
          }
        >
          <ShoppingBagIcon />
          <span className="absolute -top-3 -right-3 bg-primary font-semibold text-slate-200 p-2 rounded-full size-6 flex justify-center items-center">
            {items.length}
          </span>
        </NavLink>
      </div>
    </div>
  );
};
