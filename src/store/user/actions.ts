import { apiUrl } from "../../config/constants";
import axios from "axios"
import {
    appLoading,
    appDoneLoading,
    showMessageWithTimeout,
    setMessage
} from "../appState/actions"
import {
    LOGIN_SUCCES,
    LOG_OUT,
    TOKEN_STILL_VALID,
    User,
    UserWithoutToken,
    UserActionTypes,
} from "./types"
import { AppThunk } from "../types"