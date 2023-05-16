// El reducer es una función que recibe el estado que va a modificar y la action que le indica que va a hacer
import {
    GET_VIDEOGAMES,
    GET_VIDEOGAME_DETAIL,
    GET_BY_NAME,
    CLEAN_DETAIL,
    FILTER,
    ORDER,
    FILTER_BY_SOURCE,
    FILTER_BY_RATING,
    RESET,
    } from "./actions";

// Se le debe dar un estado inicial que sera un array vacio
const initialState = {
    videogames: [],
    videogameDetail: {},
    videogamesCopy: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                // OJO con estas dos lineas de abajo. min 13 de hooks
                videogames: action.payload,
                videogamesCopy: action.payload };

        case GET_VIDEOGAME_DETAIL:
            return { ...state, videogameDetail: action.payload };

        case GET_BY_NAME:
            return { ...state, videogames: action.payload };

        case CLEAN_DETAIL:
            return { ...state, videogameDetail: {},};

        case FILTER:
            const videogamesCopyFiltered = state.videogamesCopy.filter(videogame => videogame.genres.includes(action.payload));
            return {
                ...state,
                videogames: 
                action.payload === 'AllVideogames'
                ? [...state.videogamesCopy]
                : videogamesCopyFiltered
            }

        case ORDER:
            const videogamesCopyOrdered = [ ...state.videogamesCopy ]
            return {
                ...state,
                videogames: 
                action.payload === 'A'
                ? videogamesCopyOrdered.sort((a, b) => a.name.localeCompare(b.name))
                : videogamesCopyOrdered.sort((a, b) => b.name.localeCompare(a.name))
            }

        case FILTER_BY_SOURCE:
            const videogamesCopySource = state.videogamesCopy.filter(videogame => videogame.created === (action.payload === 'true'));
            return {
                ...state,
                videogames:
                action.payload === 'AllSource'
                ? [...state.videogamesCopy]
                : videogamesCopySource
            }
            
        case FILTER_BY_RATING:
            const videogameCoyRating = [ ...state.videogamesCopy ]
            return {
                ...state,
                videogames:
                action.payload === 'A'
                ? videogameCoyRating.sort((a, b) => a.rating - b.rating)
                : videogameCoyRating.sort((a, b) => b.rating - a.rating)
            }

        case RESET:
            return {
                ...state,
                videogames: [ ...state.videogamesCopy ]
            }

        default:
            return { ...state };
    }
};

export default rootReducer;