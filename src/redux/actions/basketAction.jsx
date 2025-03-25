import actionTypes from "../actionType";
import api from "../../utils/api";
import { v4 } from "uuid";

const getCart = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CART_LOADING });

    api
      .get(`/cart`)
      .then((res) =>
        dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: actionTypes.CART_ERROR, payload: err }));
  };
};

const createItem = (item) => {
  return async (dispatch) => {
    try {
      const newItem = {
        id: v4(),
        productId: item.id,
        title: item.title,
        price: item.price,
        photo: item.photo,
        amount: 1,
      };
      await api.post("/cart", newItem);
      dispatch({ type: actionTypes.CREATE_ITEM_, payload: newItem });
    } catch (error) {
      console.error("Ürün sepete eklenirken hata oluştu:", error);
    }
  };
};

const updateItem = (id, newAmount) => {
  return (dispatch) => {
    api
      .patch(`/cart/${id}`, { amount: newAmount })
      .then((res) =>
        dispatch({ type: actionTypes.UPDATE_ITEM, payload: res.data })
      );
  };
};
const deleteItem = (id) => {
  return (dispatch) => {
    api
      .delete(`/cart/${id}`)
      .then(() => dispatch({ type: actionTypes.DELETE_ITEM, payload: id }));
  };
};

export { getCart, createItem, deleteItem, updateItem };
