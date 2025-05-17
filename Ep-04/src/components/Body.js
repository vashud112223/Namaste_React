import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  // Local State Variable- Super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.9537504&lng=81.00644419999999&carousel=true&third_party_vendor=1"
    );
    const res = await data.json();
    setListofRestaurants(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
