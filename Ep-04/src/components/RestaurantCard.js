import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    totalRatingsString,
    costForTwo,
    deliveryTime,
    cuisines,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{totalRatingsString} stars</h4>
      <h4>₹ {costForTwo / 100} for Two </h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;