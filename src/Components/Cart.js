import ItemList from "./ItemList";
import { useSelector } from "react-redux"
const Cart = () => {
  const items = useSelector((store) => store.cart.items)
  console.log("items", items)
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Carts</h1>
      {items.length < 1 ? (
        <h1>No Items in the cart</h1>
      ) : (
        <div className="w-6/12 m-auto">
          <ItemList items={items} />
        </div>
      )}
    </div>
  );
};

export default Cart;
