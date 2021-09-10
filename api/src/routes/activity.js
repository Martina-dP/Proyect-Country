const router = require('express').Router();
const { Country, Activity } = require("../db")

router.get("/", async (_req, res) => {
    const activity = await Activity.findAll({
      include: Country,
    });
    res.json(activity);
  });

router.post('/', async function(req, res) {
    const {
        country,
        name,
        difficulty,
        duration,
        season } = req.body;

    const activityCreated = await Activity.create({
        name,
        difficulty,
        duration,
        season });

    try {
    // { 
    //     const countries = await Country.findAll({
    //         where : {
    //             id : id
    //         }
    //     })
        await activityCreated.addCountries(country);
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