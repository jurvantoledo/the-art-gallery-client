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
    ADD_GALLERY_DETAILS,
    ADD_NEW_ARTWORK,
    REMOVE_ARTWORK,
    Gallery,
    GalleryActionTypes,
} from "./types"
import { ArtWorkActionTypes, ArtWorks } from "../artWork/types";
import { selectToken } from "../user/selectors";
import { selectGalleryDetails } from "./selectors";
import { getUserWithStoredToken } from "../user/actions";


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

  const addGalleryDetails = (galleryDetails: Gallery): GalleryActionTypes => {
    return { 
        type: ADD_GALLERY_DETAILS, 
        payload: galleryDetails 
    };
  };
  
  export const fetchGalleryDetails = (id: number): AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.get(`${apiUrl}/gallery/${id}`);
        const gallery = response.data.galleries;
        
        dispatch(addGalleryDetails(gallery));
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
      }
      dispatch(appDoneLoading());
    };
  };

  const addNewArtWork = (newArtWork: ArtWorks): GalleryActionTypes => {
    return { 
      type: ADD_NEW_ARTWORK, 
      payload: newArtWork 
    };
  };

  export const submitNewArtWork = (
    name: string,
    description: string,
    image: string,
    price: string
  ) : AppThunk => {
    return async (dispatch, getState) => {
      dispatch(appLoading())
      const token = selectToken(getState())
      const { id } = selectGalleryDetails(getState())

      try {
        const response = await axios.post(`${apiUrl}/gallery/${id}`, 
        {
          name,
          description,
          image,
          price
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        );

        dispatch(addNewArtWork(response.data))
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

  const removeArtWork = (newArtWorkList: ArtWorks[]): ArtWorkActionTypes => {
    return { 
        type: REMOVE_ARTWORK, 
        payload: newArtWorkList 
    };
  };

  export const deleteArtWork = (id: number) : AppThunk => {
      return async (dispatch, getState) => {
          dispatch(appLoading())
          const token = selectToken(getState())

          try {
              const response = await axios.delete(`${apiUrl}/work/${id}`,
              {
                  headers: { Authorization: `Bearer ${token}`}
              })
              console.log("this is response", response);
              dispatch(getUserWithStoredToken());
              dispatch(appDoneLoading()); 
          } catch (error) {
            if (error.response) {
                console.log(error.response.message);
              } else {
                console.log(error);
              }
          }
      }
  }
  