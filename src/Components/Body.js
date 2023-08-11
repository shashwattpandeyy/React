import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [search, setSearch] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  const online = useOnlineStatus();
  useEffect(() => {
    console.log("Body useEffect Called")
    async function fetchData() {
      const data = await fetch(BASE_URL);
      const response = await data.json();
      setRestaurants(response.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestaurant(response.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    fetchData();
  }, []);


  console.log("Body Rendered", restaurants);

  if(online === false) {
    return <h1>Looks like your internet is not working.</h1>
  }
  return (
    <div className="body mx-4">
      <div className="search py-4 ">
        <input
          type="text"
          value={search}
          className="border border-solid border-black rounded-md h-7"
          onChange={(e) => {
            const filter = restaurants.filter((restaurant) =>
              restaurant.data.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            setFilterRestaurant(filter);
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-gray-400 px-8 ml-4 rounded-md h-7"
          onClick={() => {
            const filter = restaurants.filter((restaurant) =>
              restaurant.data.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterRestaurant(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {filterRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                rating={restaurant.info.avgRating}
                image={restaurant.info.cloudinaryImageId}
              />
            ) : (
              <RestaurantCard
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                rating={restaurant.info.avgRating}
                image={restaurant.info.cloudinaryImageId}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
