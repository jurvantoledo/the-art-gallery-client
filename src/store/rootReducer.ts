import { combineReducers } from "redux";
import appState from "./appState/reducer"

export default combineReducers({
    appState

});

export type RootState = ReturnType<typeof combineReducers>;