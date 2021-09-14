const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require("./country")
const activityRoute = require("./activity")
const getRoute = require("./activity")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoute);
router.use('/activities', getRoute);
router.use('/activity', activityRoute);


module.exports = router;
