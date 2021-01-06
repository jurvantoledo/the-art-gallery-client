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
    ADD_ALL_GALLERIES,
    Gallery,
    GalleryActionTypes,
} from "./types"


const addAllGalleries = (galleries: Gallery[]): GalleryActionTypes => {
    return { 
        type: ADD_ALL_GALLERIES, 
        payload: galleries 
    };
  };

  export const fetchAllGalleries = (): AppThunk => {
      return async (dispatch, getState) => {
          dispatch(appLoading)
          try {
              const response = await axios.get(`${apiUrl}/gallery`)

              const galleries = response.data.galleries
              console.log(response.data)
              dispatch(addAllGalleries(galleries))
              dispatch(appDoneLoading)
          } catch (error) {
              if(error.response) {
                  console.log(error.response.data.message)
                  dispatch(setMessage("danger", true, error.response.data.message));
              } else {
                  console.log(error.message)
                  dispatch(setMessage("danger", true, error.message));
              }
          }
      }
  } 