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
            orders: {
                ...state.orders, 
                ...action.payload
            },
            quantity: state.orders
        }
      
          default:
              return state;

  }
}