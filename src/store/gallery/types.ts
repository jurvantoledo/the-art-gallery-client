import { ArtWorks } from "../artWork/types"
import { User } from "../user/types"

export const ADD_ALL_GALLERIES = "ADD_ALL_GALLERIES"
export const ADD_GALLERY_DETAILS = "ADD_GALLERY_DETAILS"

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

export type GalleryActionTypes =
| AddAllGalleriesAction
| AddGalleryDetailsAction
 
