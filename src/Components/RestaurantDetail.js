import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetail = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if(resInfo === null) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    )
  }


  console.log("Restaurant Detail")
  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card
  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((d) => d.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(itemCards, category)
  return (
    <div className="text-center my-6">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      {
        // Controlled Component
        category.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            show={showIndex === index ? true : false}
            setIndex={() => setShowIndex(index)}
          />
        ))
      }
    </div>
  );
}

export default RestaurantDetail;