import { RootState } from "../types";


export const selectAllGalleries = (state: RootState) => state.galleries.all

export const selectGalleryDetails = (state: RootState) => { 
    const gallery = state.galleries.galleryDetails
    
    return gallery
}
