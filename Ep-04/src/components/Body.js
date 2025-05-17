import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  // Local State Variable- Super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.data?.totalRatingsString > 4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
