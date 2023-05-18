import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER = "ORDER";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const FILTER_BY_RATING = "FILTER_BY_RATING";
export const RESET = "RESET";

// Actions para pedir info
export const getVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogames");
        const videogames = apiData.data;
        dispatch({ type: GET_VIDEOGAMES, payload: videogames });
    };
};

export const getVideogameDetail = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
        const videogame = apiData.data;
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: videogame });
    };
};

export const getByName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        const videogameName = apiData.data;
        dispatch({ type: GET_BY_NAME, payload: videogameName })
    }
};

export const getGenres = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/genres");
        const genres = apiData.data;
        dispatch({ type: GET_GENRES, payload: genres })
    }
};

// Actions para filtrar
export const filterByGenre = (genre) => {
    return { type: FILTER_BY_GENRE, payload: genre }
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const orderGames = (order) => {
    return { type: ORDER, payload: order }
};

export const filterBySource = (source) => {
    return { type: FILTER_BY_SOURCE, payload: source }
};

export const filterByRating = (order) => {
    return { type: FILTER_BY_RATING, payload: order }
};

export const reset = () => {
    return { type: RESET }
};
