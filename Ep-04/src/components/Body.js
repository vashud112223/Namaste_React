import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";

//  const [searchText, setSearchText] = useState(""); never create outside the body, it is used for creating local variable inside the functional component and always try to call on the top
// never create useState inside if else or for loop , it will create inconsistency
const Body = () => {
  // Local State Variable- Super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  const [filteredRestaurnat, setfilteredRestaurnat] = useState(resList);
  const [searchText, setSearchText] = useState("");
  // console.log("body rendered");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] -> useEffect is called on innitial render(just once)
  // if dependency array is [btnName] => called everytime [btnName] is updated

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.9537504&lng=81.00644419999999&carousel=true&third_party_vendor=1");

  //   const res = await data.json();
  //   setListofRestaurants(
  //     res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   console.log(
  //     res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
  // const fetchData = resList;
  // setListofRestaurants(resList)

  // Conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   console.log("loading")
  //   return <Shimmer/>
  // }
  // we cannot type the value in search box because value is bind to search text and it is empty, to change the value we have to use onchange method
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              console.log(searchText);
              const filterRestaurant = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurnat(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setfilteredRestaurnat(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurnat.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
