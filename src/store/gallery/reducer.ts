import { 
    ADD_ALL_GALLERIES, 
    GalleryState,
    GalleryActionTypes
} from "./types"

const initialState: GalleryState = {
    all: []
}

export default (state = initialState, action: GalleryActionTypes) => {
    switch(action.type) {
        case ADD_ALL_GALLERIES:
            return {...state, all: action.payload}

        default:
            return state;
    }

}