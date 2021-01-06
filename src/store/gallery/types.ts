import { User } from "../user/types"

export const ADD_ALL_GALLERIES = "ADD_ALL_GALLERIES"

export interface GalleryState {
    all: Gallery[]
}

export interface Gallery {
    id: number;
    name: string;
    description?: string;
    userId?: number;
    createdAt: string;
    updatedAt: string;
    user: User;
}

interface AddAllGalleriesAction {
    type: typeof ADD_ALL_GALLERIES,
    payload: Gallery[]
}

export type GalleryActionTypes =
| AddAllGalleriesAction
 
