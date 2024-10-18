import { CartItem } from "@/components/cart-page/CartItem";
import { Button } from "@/components/common/Button";
import { useCartStore } from "@/store/cart";
import { formatMoney } from "@/utils";
import { ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items } = useCartStore();

  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="max-w-3xl mx-auto my-10 min-h-[55vh]">
      {items.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center mt-20">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/20">
            <ShoppingBagIcon className="size-10 text-primary" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">
            You do not have any items in your cart.
          </h2>
          <p className="mt-1 text-muted-foreground">Start shopping now!</p>
          <Button as={Link} to={"/products"} className="mt-4 min-w-32">
            Shop Now
          </Button>
        </div>
      ) : (
        <div className="grid gap-y-10 divide-y-[1px]">
          {items?.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="pt-10">
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl font-bold">SubTotal</p>
              <p className="text-xl font-bold">{formatMoney(totalPrice)}</p>
            </div>

            <Button className="mt-8 w-full py-3" as={Link} to={"/checkout"}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
