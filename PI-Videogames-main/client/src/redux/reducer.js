// El reducer es una función que recibe el estado que va a modificar y la action que le indica que va a hacer
import { GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL } from "./actions";

// Se le debe dar un estado inicial que sera un array vacio
const initialState = {
    videogames: [],
    videogameDetail: {},
    allVideogames: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return { ...state, videogames: action.payload };
        case GET_VIDEOGAME_DETAIL:
            return { ...state, videogameDetail: action.payload};
        
            default:
            return { ...state };
    }
};

export default rootReducer;