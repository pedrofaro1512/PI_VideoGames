const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

// Filtrado de la información de los videogames
const cleanVideogame = (arr) => { 
    const clean = arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platforms: elem.platforms.map((el) => el.platform.name,),
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            created: false,
            genres: elem.genres.map((el) => el.name,),
        };
    });
    return clean;
};

// Controller para videogames de la BD o la API por name o no
const searchVideogameByName = async (name) => {
    const dbVideogames = await Videogame.findAll({ where: { name:name }});
    const apiVideogames = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;

    const apiVideogamesData = cleanVideogame(apiVideogames);

    const filteredApiVideogame = apiVideogamesData.filter((elem) => elem.name.toLowerCase().includes(name.toLowerCase()));

    return [ ...dbVideogames, ...filteredApiVideogame];
};

// Controller para traer todos los videogames de la BD o la API
const getAllVideogames = async () => {
    const dbVideogames = await Videogame.findAll();
    const apiVideogames = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;

    const apiVideogamesData = cleanVideogame(apiVideogames);

    return [ ...dbVideogames, ...apiVideogamesData];
};

const createVideogame = async (name, image, description, platforms, released, rating, gener) => {
    const newVideogame = await Videogame.create({ name, image, description, platforms, released, rating, gener });
    return newVideogame;
};

const getVideogameById = async (id, source) => {

};

module.exports = {
    getAllVideogames,
    searchVideogameByName,
    createVideogame,
    getVideogameById
};



// "results": [
//     {
//         "platforms": [
//         {
//           "platform": {
//             "name": "PlayStation 5",
//           },
//         },
//         {
//           "platform": {
//             "name": "Xbox Series S/X",
//           },
//         },
//         {
//           "platform": {
//             "name": "PlayStation 4",
//           },
//         },
//         ]
//     }
// ]