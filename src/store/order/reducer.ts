import { 
    ADD_ORDER,
    ALL_ORDERS, 
    OrderActionTypes, 
    OrderState, 
} from "./types"

const initialState: OrderState = {
    orders: [],
}

export default (state = initialState, action: OrderActionTypes) => {
    switch(action.type) {
        case ALL_ORDERS:
            return {
            ...state,
            orders: {...state.orders, ...action.payload}
            }

    case ADD_ORDER:
        return {
          ...state,
          products: state.orders.map((o) =>
            o === action.payload
              ? {
                  ...o,
                  quantity: o.quantity + 1,
                }
              : o
          ),
        };
      
          default:
              return state;

  }
}