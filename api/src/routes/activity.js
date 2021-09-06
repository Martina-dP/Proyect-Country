const router = require('express').Router();
const { Country, Activity } = require("../db")

router.post('/', async function(req, res) {
    const {
        id,
        name,
        severity,
        duration,
        season } = req.body;

    const activityCreated = await Activity.create({
        name,
        severity,
        duration,
        season });

    try { 
        const countries = await Country.findAll({
            where : {
                id : id
            }
        })
        await activityCreated.addCountries(countries);
        res.send("Actividad creada")
    } catch (err) {
        res.send("Error")
    }
 });

router.delete('/:id', async function(req, res) {
    const { id } = req.params
    try {
         await Activity.destroy({
            where:{
                id:id
            }
        })
        return res.send("Actividad eliminada")
    } catch (error) {
        res.send("No se pudo eliminar")
    }
});

module.exports = router;