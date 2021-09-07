const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require("./country")
const activityRoute = require("./activity")
const getRoute = require("./activity")
const deleteActivityRoute = require("./deleteActivity")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoute);
router.use('/activity', getRoute);
router.use('/activity', activityRoute);
router.use('/activity', deleteActivityRoute);

module.exports = router;
