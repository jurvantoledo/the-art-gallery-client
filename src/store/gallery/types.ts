import { ArtWorks } from "../artWork/types"
import { User } from "../user/types"

export const ADD_ALL_GALLERIES = "ADD_ALL_GALLERIES"
export const ADD_GALLERY_DETAILS = "ADD_GALLERY_DETAILS"
export const ADD_NEW_GALLERY = "ADD_NEW_GALLERY"
export const ADD_NEW_ARTWORK = "ADD_NEW_ARTWORK"
export const REMOVE_ARTWORK = "REMOVE_ARTWORK"

export interface GalleryState {
    all: Gallery[]
    galleryDetails: Gallery;
}

export interface Gallery {
    id: number;
    name: string;
    imageUrl: string
    description?: string;
    userId?: number;
    createdAt: string;
    updatedAt: string;
    user?: User;
    artWorks?: ArtWorks[]
}

interface AddAllGalleriesAction {
    type: typeof ADD_ALL_GALLERIES,
    payload: Gallery[]
}

interface AddGalleryDetailsAction {
    type: typeof ADD_GALLERY_DETAILS;
    payload: Gallery;
  }

  interface AddNewGalleryAction {
    type: typeof ADD_NEW_GALLERY,
    payload: Gallery;
}

  interface AddNewArtWorkAction {
    type: typeof ADD_NEW_ARTWORK,
    payload: ArtWorks;
}

interface RemoveArtWorkAction {
    type: typeof REMOVE_ARTWORK,
    payload: ArtWorks[]
}

export type GalleryActionTypes =
| AddAllGalleriesAction
| AddGalleryDetailsAction
| AddNewGalleryAction
| AddNewArtWorkAction
| RemoveArtWorkAction
 
