import { 
    ADD_ORDERS, 
    OrderActionTypes, 
    OrderState, 
} from "./types"

const initialState: OrderState = {
    orders: [],
}

export default (state = initialState, action: OrderActionTypes) => {
    switch(action.type) {
        case ADD_ORDERS:
            return {
            ...state,
            orders: {...state.orders, ...action.payload}
            }

          default:
              return state;

  }
}