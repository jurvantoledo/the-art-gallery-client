export const ADD_ALL_ARTWORKS = "ADD_ALL_ARTWORKS"
export const REMOVE_ARTWORK = "REMOVE_ARTWORK"

export interface GalleryState {
    all: ArtWorks[]
}

export interface ArtWorks {
    id: number;
    name: string;
    image: string
    description?: string;
    price?: string;
    quantity?: any;
    galleryId?: number;
    createdAt: string;
    updatedAt: string;
}

interface AddAllArtWorkActions {
    type: typeof ADD_ALL_ARTWORKS,
    payload: ArtWorks[]
}

interface RemoveArtWorkAction {
    type: typeof REMOVE_ARTWORK,
    payload: ArtWorks[]
}

export type ArtWorkActionTypes =
| AddAllArtWorkActions
| RemoveArtWorkAction