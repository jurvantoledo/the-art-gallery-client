import { 
    ADD_ALL_GALLERIES, 
    ADD_GALLERY_DETAILS,
    ADD_NEW_ARTWORK,
    REMOVE_ARTWORK,
    GalleryState,
    GalleryActionTypes
} from "./types"

const initialState: GalleryState = {
    all: [],
    galleryDetails: {
    id: 0,
    name: "",
    description: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "",
    }
}

export default (state = initialState, action: GalleryActionTypes) => {
    switch(action.type) {
        case ADD_ALL_GALLERIES:
            return { ...state, all: action.payload };

        case ADD_GALLERY_DETAILS:
            return {
            ...state,
            galleryDetails: {...state.galleryDetails, ...action.payload}
            }

        case ADD_NEW_ARTWORK:
            return {
                ...state,
                galleryDetails: {...state.galleryDetails, ...action.payload}
            }

        default:
            return state;
    }

}