const { Router } = require('express');
// Importar todos los routers;
const videogamesRouter = require('./videogamesRouters');
const genresRouter = require('./genresRouters');

const router = Router();

// Path de las rutas
router.use('/videogames', videogamesRouter);
router.use('/genres', videogamesRouter);

module.exports = router;
