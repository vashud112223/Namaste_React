import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const {resId} = useParams();
 
  const resInfo = useRestaurantMenu(resId);
 
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
