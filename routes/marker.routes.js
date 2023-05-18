const express = require("express")
const Marker = require("../models/Marker.model")
const Movie = require("../models/Movie.model")
const router = express.Router()


router.post("/create", (req, res, next) => {
     const {title, movie_ID, name, latitude, longitude, description, contributor, movieFrame} = req.body

     const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
     }

    Marker
    .create({name, description, location, movieFrame, movie_ID })
    .then( markerData => {
      Movie.findOne({movie_ID: {$eq: movie_ID}})
      .then(response => {
         console.log("------------------RESPONSE ANTE DEL PUSH",response,"--------------")
         console.log("------------------MARKERDATA",markerData._id,"--------------")
         response.markers.push(markerData._id)
         console.log("------------------RESPONSE DESPUES DEL PUSH",response,"--------------")
      })
      .catch(err=>next(err))
    }
    )
    .then(res.redirect(`/movie/${movie_ID}`))
    .catch(err => next(err))

///PASAR CONTRIBUIDOR
})


module.exports = router