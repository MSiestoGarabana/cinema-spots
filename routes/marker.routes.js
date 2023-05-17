const express = require("express")
const router = express.Router()

//const Marker = require('../models/Marker.model')

router.post("/createMarker/:id", (req, res, next) => {
    res.send(req.body)
   /*  const {id} = req.params
    const {
        name,
        description,
        contributor,
        location,
        movieFrame} = req.body */

})


module.exports = router