import React from "react";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducers);
  const { cart } = useSelector((store) => store.cartReducer);

  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="shadow">
      <div className="max-w-[1140px] mx-auto p-5 lg:p-8 flex items-center justify-between">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl "
        >
          ThunkSepeti
        </Link>
        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>Yakınınızda {restaurants.length}</span>
            <IoRestaurant className="text-red-500" />
            <span className="max-sm:hidden">Restaurant Var</span>
          </Link>
          <button className="text-red-500 border py-1 px-3 rounded  p-3 hover:bg-red-400 hover:text-white transition cursor-pointer max-md:hidden">
            Giriş Yap
          </button>
          <button className="text-red-500 border py-1 px-3 rounded  p-3 hover:bg-red-400 hover:text-white transition cursor-pointer max-md:hidden">
            Kaydol
          </button>
          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded-full"
          >
            <BsBasket />
            <span>{totalAmount} </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
