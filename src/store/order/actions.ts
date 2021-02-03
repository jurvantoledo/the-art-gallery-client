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
    ADD_ORDER,
    ALL_ORDERS, 
    Order, 
    OrderActionTypes 
} from "./types";
import { selectToken, selectUser } from "../user/selectors";

const allOrders = (orders: Order[]): OrderActionTypes => {
    return { 
        type: ALL_ORDERS, 
        payload: orders 
    };
  };

  export const fetchOrders = (id: number): AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.get(`${apiUrl}/order/${id}`);
        const order = response.data.orders;
        
        dispatch(allOrders(order));
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

  const addOrder = (newOrder: Order[]): OrderActionTypes => {
    return { 
      type: ADD_ORDER, 
      payload: newOrder 
    };
  };

  export const addNewOrder = (
    artWorkId: number,
  ) : AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading())
      const token = selectToken(getState())
      const { id } = selectUser(getState())

      try {
        const response = await axios.post(`${apiUrl}/order`, 
        {
          userId: id,
          artWorkId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        );

        dispatch(addOrder(response.data))
        dispatch(showMessageWithTimeout("succes", true, "Item succesfully added."))
        dispatch(appDoneLoading())
      } catch (error) {
        if(error.response) {
          console.log(error.message)
          dispatch(setMessage("danger", true, error.response.data.message))
        } else {
          console.log(error.message)
          dispatch(setMessage("danger", true, error.message))
        }
        dispatch(appDoneLoading());
      }
    }
  }