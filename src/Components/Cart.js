import { redirect } from "react-router-dom";
import ItemList from "./ItemList";
import { useSelector } from "react-redux"
import { useProfile } from "../utils/apis";
const Cart = () => {
  const items = useSelector((store) => store.cart.items)
  const { data, error } = useProfile();
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Carts</h1>
      <h3 className="font-bold capitalize m-2">Welcome back, {data?.data?.first_name}</h3>
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
