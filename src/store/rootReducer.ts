import { combineReducers } from "redux";
import appState from "./appState/reducer"
import user from "./user/reducer"
import galleries from "./gallery/reducer"
import orders from "./order/reducer"

export default combineReducers({
    appState,
    user,
    galleries,
    orders,
});

export type RootState = ReturnType<typeof combineReducers>;