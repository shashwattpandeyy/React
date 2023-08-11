import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, show, setIndex, index }) => {

  const handleClick = () =>{
    setIndex();
  }
  return (
    <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-md">
      <div className="flex p-4 justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          {!show && <img
            width="26"
            height="26"
            src="https://img.icons8.com/metro/26/long-arrow-down.png"
            alt="long-arrow-down"
          />}
         {show && <img
            width="26"
            height="26"
            src="https://img.icons8.com/metro/26/long-arrow-up.png"
            alt="long-arrow-up"
          />}
        </span>
      </div>
      {show && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;