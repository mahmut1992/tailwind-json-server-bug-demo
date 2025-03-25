import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      {!restaurant ? (
        <Loader />
      ) : (
        <div className="flex gap-5">
          <img
            src={restaurant.photo}
            alt="rastaurant-photo"
            className="w-[150px] rounded-md "
          />
          <div className="flex flex-col justify-between">
            <div className="flex gap-4">
              <p className="flex items-center gap-2">
                <FaArrowDown className="text-red-500" />
              </p>
              <span className="text-gray-500">
                min {restaurant.minPrice} TL{" "}
              </span>
              <p className="flex items-center gap-2">
                <FaClock className="text-red-500" />
              </p>
              <span className="text-gray-500">
                min {restaurant.estimatedDelivery} dak.{" "}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {restaurant.name}{" "}
            </h1>
            <div className="flex items-center gap-2">
              <FaStar className="text-red-500" />
              <span>{restaurant.rating}</span>
              <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition cursor-pointer">
                Yorumları Gör
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
