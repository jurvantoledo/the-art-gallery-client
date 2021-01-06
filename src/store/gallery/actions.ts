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


const addAllGalleries = (allGalleries: Gallery[]): GalleryActionTypes => {
    return { type: ADD_ALL_GALLERIES, payload: allGalleries };
  };

  export const fetchAllGalleries = (): AppThunk => {
      return async (dispatch, getState) => {
          dispatch(appDoneLoading)

          try {
              const response = await axios.get(`${apiUrl}/gallery`)

              dispatch(addAllGalleries(response.data))
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