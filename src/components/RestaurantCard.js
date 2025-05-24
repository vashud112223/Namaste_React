import React from "react";
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedIn} = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, costForTwo, sla, cuisines } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User: {loggedIn}</h4>
    </div>
  );
};

// Higer Order Component

//input - ResaturantCard =>ResataaurantCardpromoted

export const withPromotedLabel = (ResaturantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute m-2 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <ResaturantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
