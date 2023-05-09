const { Router } = require('express');
const { 
    getVideogameHandler,
    getVideogameIdHandler,
    postVideogameHandler,
} = require('../handlers/videogamesHandlers')

const videogamesRouter = Router();

// Validación de creación de juegos
const validateVideogame = (req, res, next) => {
    const { name, image, description, platforms, released, rating, gener } = req.body;
    if (!name) return res.status(400).json({ error: "Missing name" });
    if (!image) return res.status(400).json({ error: "Missing image" }); 
    if (!description) return res.status(400).json({ error: "Missing description" }); 
    if (!platforms) return res.status(400).json({ error: "Missing platforms" }); 
    if (!released) return res.status(400).json({ error: "Missing released" }); 
    if (!rating) return res.status(400).json({ error: "Missing rating" }); 
    if (!gener) return res.status(400).json({ error: "Missing gener" }); 

    next();
};

videogamesRouter.get('/', getVideogameHandler);
videogamesRouter.get('/:id', getVideogameIdHandler);
videogamesRouter.post('/', validateVideogame, postVideogameHandler);

module.exports = videogamesRouter;