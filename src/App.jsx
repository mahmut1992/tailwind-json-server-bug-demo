import { useDispatch } from "react-redux";
import { getRestaurant } from "./redux/actions/reastaurantActions";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Header from "./components/Header";
import { getCart } from "./redux/actions/basketAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
