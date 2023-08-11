import { useContext } from "react";
import { CLOUDINARY_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItems(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex justify-between px-4 my-4  border-gray-300 border-b-2"
        >
          <div className="w-9/12 text-left space-y-1">
            <h1 className="font-bold text-md">{item.card?.info?.name}</h1>
            <h2 className="text-sm">Rs {item.card?.info?.price / 100}</h2>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              className="w-full rounded-md"
              src={`${CLOUDINARY_URL}${item.card.info.imageId}`}
            />
            <button
              className="bg-gray-100 text-md p-1 px-2 rounded absolute mt-[-16px] ml-[-20px]"
              onClick={() => handleAdd(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
