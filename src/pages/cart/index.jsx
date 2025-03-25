import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/error";
import Warning from "../../components/Warning";
import CartItem from "../../components/CartItem";
import Total from "../../components/Total";

const Cart = () => {
  const { cart, error, isLoading } = useSelector((store) => store.cartReducer);

  return (
    <div className="max-w-[1440px] mx-auto p-5 lg:p-8 ">
      <h1 className="text-2xl font-bold my-5">Sepet</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-4 ">
        <div>
          <div>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Error info={error} />
            ) : cart.lenth == 0 ? (
              <Warning />
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>
        </div>
        <Total cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
