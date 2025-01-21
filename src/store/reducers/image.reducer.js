import { SET_IMAGE_URL, SET_IMAGE_DIMENSION } from "../constants";

const dimension = { width: 500, height: 500 };

const defaultState = {
    ...dimension,
    url: `https://react-puzzle-game-azure.vercel.app/image.png`,
};

const imageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_IMAGE_DIMENSION:
            const { width, height } = action.payload;
            return { ...state, width, height };
        case SET_IMAGE_URL:
            const url = action.payload;
            console.log(url);
            return { ...state, url };
        default:
            return state;
    }
};

export default imageReducer;
