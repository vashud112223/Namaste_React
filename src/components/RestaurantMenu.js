import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const[showIndex,setShowIndex] = useState(null);

  // Show loading shimmer if data is not yet fetched
  if (Object.keys(resInfo).length === 0) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((card) => card?.card?.card?.itemCards)
      ?.flatMap((card) => card.card.card.itemCards) || [];
  // console.log(
  //   resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{restaurantInfo?.name}</h1>
      <p className="font-bold text-lg">
        {restaurantInfo?.cuisines?.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </p>
      {/** categories accordians */}
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          /** lifting the state-up concept */
          showItems = {index ===showIndex}
          setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
