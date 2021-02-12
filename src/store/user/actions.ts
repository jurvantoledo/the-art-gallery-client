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
import { selectToken, selectUser } from "./selectors";
import { 
    Gallery, 
    GalleryActionTypes, 
    ADD_NEW_GALLERY 
} from "../gallery/types";

const loginSucces = ( userWithToken: User): UserActionTypes => {
    return {
        type: LOGIN_SUCCES,
        payload: userWithToken
    }
}

const tokenStillValid = (
    userWithoutToken: UserWithoutToken
) : UserActionTypes => ({
    type: TOKEN_STILL_VALID,
    payload: userWithoutToken
})

export const logOut = () : UserActionTypes => ({type: LOG_OUT})

export const signUp = (
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    imageUrl: string,
    email: string,
    phone: string,
    password: string,
    hasGallery: boolean
) : AppThunk => {
    return async (dispatch, getState) => {
        dispatch(appLoading())
        try {
            const response = await axios.post(`${apiUrl}/signup`, {
                firstName,
                lastName,
                email,
                phone,
                country,
                city,
                imageUrl,
                password,
                hasGallery
            })

            console.log(response.data)
            dispatch(loginSucces(response.data))
            dispatch(showMessageWithTimeout("success", true, "Account created"));
            dispatch(appDoneLoading())
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(setMessage("danger", true, error.response.data.message));
              } else {
                console.log(error.message);
                dispatch(setMessage("danger", true, error.message));
              }
              dispatch(appDoneLoading());
            }    
        }
    } 

export const login = (email: string, password: string): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(appLoading())
        try {
            const response = await axios.post(`${apiUrl}/login`, {
                email,
                password,
            })
            
            dispatch(loginSucces(response.data))
            dispatch(showMessageWithTimeout("succes", false, "Welcome back!", 1500))
            dispatch(appDoneLoading())
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(setMessage("danger", true, error.response.data.message));
              } else {
                console.log(error.message);
                dispatch(setMessage("danger", true, error.message));
              }
              dispatch(appDoneLoading()); 
        }
    }
}

export const getUserWithStoredToken = (): AppThunk => {
    return async (dispatch, getState) => {
        //get token form state
        const token = selectToken(getState())

        // if we ahve no token, STOP!
        if (!token) return;

        dispatch(appLoading())
        try {
            const response = await axios.get(`${apiUrl}/me`, {
                headers: { Authorization: `Bearer ${token}`}
            })

            dispatch(tokenStillValid(response.data))
            dispatch(appDoneLoading())
        } catch (error) {
            if (error.response) {
                console.log(error.response.message)
            } else {
                console.log(error)
            }
        // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
            dispatch(logOut())
            dispatch(appDoneLoading())
        }
    }
}

const addNewGallery = (newGallery: Gallery): GalleryActionTypes => {
    return { 
      type: ADD_NEW_GALLERY, 
      payload: newGallery 
    };
  };

  export const submitNewGallery = (
    name: string,
    description: string,
    imageUrl: string,
  ) : AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading())
      const token = selectToken(getState())
      const { id } = selectUser(getState())

      try {
        const response = await axios.post(`${apiUrl}/${id}`, 
        {
          name,
          description,
          imageUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        );

        dispatch(addNewGallery(response.data))
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