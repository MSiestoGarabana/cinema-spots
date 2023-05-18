const express = require("express")
const Marker = require("../models/Marker.model")
const router = express.Router()

router.post("/create", (req, res, next) => {
     const {title, movie_ID, name, latitude, longitude, description, contributor, movieFrame} = req.body
     console.log("COMMMMIIINGGG FROM REQ.BODY",title, movie_ID, name, latitude, longitude, description, contributor, movieFrame)

     const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
     }

    Marker
    .create({name, description, location, movieFrame, movie_ID })
    .then(res.redirect(`/movie/${movie_ID}`))
    .catch(err => next(err))

///PASAR CONTRIBUIDOR
})


module.exports = router