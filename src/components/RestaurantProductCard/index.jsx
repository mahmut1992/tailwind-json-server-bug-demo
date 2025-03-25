import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketAction";

const RestaurantProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((store) => store.cartReducer);

  const found = cart.find((cartItem) => cartItem.productId == item.id);

  const handleAdd = (event) => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(createItem(item));
  };
  return (
    <div>
      <div className="border p-3 shadow grid grid-cols-[1fr_115px] gap-3 rounded-lg hover:bg-red-100 border-zinc-100 hover:scale-[1.02] transition cursor-pointer duration-300 ">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold">{item.title} </h1>
            <p className="text-gray-500 my-1">{item.desc} </p>
          </div>
          <p className="text-lg font-semibold"> {item.price} TL</p>
        </div>
        <div className="relative">
          <img
            className="size-full rounded-md object-cover"
            src={item.photo}
            alt="item-photo"
          />
          <button
            onClick={handleAdd}
            className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center hover:bg-red-100 cursor-pointer"
          >
            {found ? <span>{found.amount} </span> : <FaPlus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductCard;
