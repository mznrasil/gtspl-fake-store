import { Button } from "@/components/common/Button";
import { useCartStore } from "@/store/cart";
import { formatMoney } from "@/utils";
import { CircleOffIcon } from "lucide-react";

export default function CheckoutPage() {
  const { clearCart, items } = useCartStore();

  const handleClearCart = () => {
    clearCart();
  };

  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col gap-4 max-w-[400px] text-center">
        <h2 className="font-bold text-4xl">
          Your Total Price: {formatMoney(totalPrice)}
        </h2>
        <p className="text-slate-500 text-sm">
          This is the checkout page. You can add your payment form here and
          finally place the order.
        </p>
        <Button onClick={handleClearCart}>
          <CircleOffIcon className="size-5" />
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
