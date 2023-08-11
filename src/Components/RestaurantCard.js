import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants"
import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({ name, rating, cuisines, image}) => {

  return (
    <div className="w-64 h-96 mb-4 space-y-2 bg-gray-200 p-2 rounded-lg hover:shadow-xl">
      <img className="w-64 rounded-md" src={`${CLOUDINARY_URL}${image}`}/>
      <h3 className="font-bold">{name}</h3>
      <h4 className="flex flex-wrap">{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg p-1">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;