import { combineReducers } from "redux";
import appState from "./appState/reducer"
import user from "./user/reducer"
import galleries from "./gallery/reducer"

export default combineReducers({
    appState,
    user,
    galleries,
});

export type RootState = ReturnType<typeof combineReducers>;