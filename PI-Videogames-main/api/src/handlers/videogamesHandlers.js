const { getAllVideogames, searchVideogameByName, createVideogame } = require('../controllers/videogamesControllers');

// Handler para traer todos los videogames si no se le pasa nada o trae el videogame que se le paso name por query
const getVideogameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = name
            ? await searchVideogameByName(name)
            : await getAllVideogames()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Handler para traer videogame por id. (params)
const getVideogameIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).send(`Juego con el id: ${id}`);
    } catch (error) {
        res.status(400).send('Algo salio mal con el id');
    }
};

// Handler para crear un juego (body)
const postVideogameHandler = async (req, res) => {
    const { name, image, description, platforms, released, rating, gener } = req.body;
    try {
        const newVideogame = await createVideogame(name, image, description, platforms, released, rating, gener);
        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getVideogameHandler, getVideogameIdHandler,postVideogameHandler };