import api from "../../utils/api";
import actionTypes from "../actionType";

const getRestaurant = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REST_LOADING });
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: actionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.REST_ERROR, payload: err.message });
      });
  };
};
export { getRestaurant };
