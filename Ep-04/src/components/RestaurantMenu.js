import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FETCH_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const { resId } = useParams();
  console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        FETCH_URL + resId
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  // Show loading shimmer if data is not yet fetched
  if (Object.keys(resInfo).length === 0) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info;
  
  const itemCards =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((card) => card?.card?.card?.itemCards)
      ?.flatMap((card) => card.card.card.itemCards) || [];

  return (
    <div className="menu">
      <h1>{restaurantInfo?.name}</h1>
      <p>
        {restaurantInfo?.cuisines?.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
