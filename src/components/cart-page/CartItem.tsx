import { type CartItemType } from "@/store/cart";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/common/Button";
import { formatMoney } from "@/utils";

export const CartItem = ({ item }: { item: CartItemType }) => {
  const { deleteItem, addItem, reduceItem } = useCartStore();

  const handleRemoveFromCart = (productId: number) => {
    deleteItem(productId);
  };

  const increaseQuantity = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: item.quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      reduceItem(item.id);
    }
  };

  return (
    <div key={item.id} className="flex pt-8">
      <div className="h-24 aspect-square relative">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain rounded-md h-full"
        />
      </div>
      <div className="ml-5 flex justify-between gap-2 w-full font-medium">
        <div className="flex flex-col gap-2">
          <p>{item.name}</p>
          <div className="flex items-center">
            <Button
              className="bg-transparent border rounded-md text-slate-500 hover:bg-slate-100 active:bg-slate-200"
              onClick={decreaseQuantity}
            >
              &minus;
            </Button>
            <span className="min-w-16 shrink-0 text-center">
              {item.quantity}
            </span>
            <Button
              className="bg-transparent border rounded-md text-slate-500 hover:bg-slate-100 active:bg-slate-200"
              onClick={increaseQuantity}
            >
              &#43;
            </Button>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between items-end">
          <div className="flex items-center gap-x-2">
            <p className="text-nowrap">{item.quantity} x</p>
            <p>{formatMoney(item.price)}</p>
          </div>

          <Button
            className="bg-transparent text-red-500 p-0 hover:bg-transparent hover:text-red-500/70"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
