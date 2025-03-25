import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/error";
import { getRestaurant } from "../../redux/actions/reastaurantActions";
import Loader from "../../components/Loader";
import RestaurandCard from "../../components/RestaurandCard";

const Home = () => {
  const dispatch = useDispatch();
  const { restaurants, error, isLoading } = useSelector(
    (state) => state.restaurantReducers
  );

  const retry = () => dispatch(getRestaurant());
  return (
    <div className="max-w-[1440px] mx-auto p-5 lg:p-8 ">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error retry={retry} info={error} />
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 ">
          {restaurants.map((restaurand) => (
            <RestaurandCard key={restaurand.id} data={restaurand} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
