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
      Movie.findOneAndUpdate({movie_ID: {$eq: movie_ID}}, { $push: {markers: markerData._id}}, {new: true})
      .then(updatedMovie => {
         res.redirect(`/movie/${updatedMovie.movie_ID}`)
      })
      .catch(err=>next(err))
    }
    )
    .catch(err => next(err))
    
})


module.exports = router