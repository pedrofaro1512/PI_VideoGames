import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const filterByGenre = (genre) => {
    return { type: FILTER, payload: genre }
};

export const order = (order) => {
    return { type: ORDER, payload: order }
};


// export const filterBySource = () => {
//     dispatch({ type: FILTER_BY_SOURCE });
// };