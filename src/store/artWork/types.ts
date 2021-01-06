export const ADD_ALL_ARTWORKS = "ADD_ALL_ARTWORKS"

export interface GalleryState {
    all: ArtWork[]
}

export interface ArtWork {
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
    payload: ArtWork[]
}

export type ArtWorkActionTypes =
| AddAllArtWorkActions