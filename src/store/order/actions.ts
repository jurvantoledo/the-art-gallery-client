import { apiUrl } from "../../config/constants";
import axios from "axios";
import { AppThunk } from "../types";
import {
  appDoneLoading,
  appLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";
import { 
    ADD_ORDERS, 
    Order, 
    OrderActionTypes 
} from "./types";


const addOrders = (orders: Order[]): OrderActionTypes => {
    return { 
        type: ADD_ORDERS, 
        payload: orders 
    };
  };

  export const fetchOrders = (id: number): AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.get(`${apiUrl}/order/${id}`);
        const order = response.data.orders;
        
        console.log("Action", order)
        dispatch(addOrders(order));
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
      }
      dispatch(appDoneLoading());
    };
  };