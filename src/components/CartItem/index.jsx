import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/actions/basketAction";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };
  const handleDelete = () => {
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };
  const handleAllDelete = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <div className="flex gap-4 border mb-10 p-4 rounded-lg">
      <img src={item.photo} alt="item-photo" className="w-[115px] rounded-lg" />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-red-500 text-xl font-semibold">{item.title} </h3>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{item.price} ₺</p>
          <div className=" text-xl rounded-lg items-center">
            <button
              onClick={handleDelete}
              className="border p-3 rounded text-red-500 hover:bg-red-500 hover:text-white cursor-pointer transition duration-300"
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="p-3">{item.amount} </span>

            <button
              onClick={handleAdd}
              className="border p-3 rounded text-red-500 hover:bg-red-500 hover:text-white cursor-pointer transition duration-300"
            >
              <FaPlus />
            </button>
            <button
              onClick={handleAllDelete}
              className="ml-10 bg-red-500 text-white px-4 py-1 rounded-md cursor-pointer hover:scale-3d"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
