export const ADD_ALL_ARTWORKS = "ADD_ALL_ARTWORKS"

export interface GalleryState {
    all: ArtWorks[]
}

export interface ArtWorks {
    id: number;
    name: string;
    image: string
    description?: string;
    galleryId?: number;
    createdAt: string;
    updatedAt: string;
}

interface AddAllArtWorkActions {
    type: typeof ADD_ALL_ARTWORKS,
    payload: ArtWorks[]
}

export type ArtWorkActionTypes =
| AddAllArtWorkActions