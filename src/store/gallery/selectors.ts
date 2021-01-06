import { RootState } from "../types";


export const selectGalleries = (state: RootState) => { 
    const galleries = state.galleries.all
    const sortedGalleries = galleries.sort(function (a, b) {
        return b.id - a.id
    })
    return sortedGalleries
} 
