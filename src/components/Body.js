import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { use, useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//  const [searchText, setSearchText] = useState(""); never create outside the body, it is used for creating local variable inside the functional component and always try to call on the top
// never create useState inside if else or for loop , it will create inconsistency
const Body = () => {
  // Local State Variable- Super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState(resList);
  const [filteredRestaurnat, setfilteredRestaurnat] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { setUserName,loggedIn } = useContext(UserContext);
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
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>Look like you re offline! Please check your connections</h1>;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-green-100 m-3 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-2 py-1 bg-gray-100  rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setfilteredRestaurnat(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
          <div className="m-4 p-4 flex items-center">
            <label className="p-2">UserName: </label>
            <input
              className="border border-black p-2"
              type="text"
              value={loggedIn}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurnat.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/** if the restaurnat is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
