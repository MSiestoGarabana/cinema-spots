const express = require('express');
const router = express.Router();
const moviesApiHandler = require('../services/moviesByName-api.service')
const Movie = require('../models/Movie.model');
const capitalize = require('../utils/capitalize');

router.get("/search", (req, res, next) => {
    res.render('movies/movies-search')
})

router.post("/search", (req, res, next) => {

    const { title } = req.body

    moviesApiHandler
        .findMovieByName(title)
        .then(({ data }) => {
            let movies = data.results.filter(movie=> !movie.genre_ids.includes(16))
            res.render('movies/movies-list', { movies, title })
        })
        .catch(err => next(err)) 
})

router.all("/:id", (req, res, next) => {
    const { id } = req.params
    const { API_KEY_MAPS: mapsKey } = process.env

    Movie.findOne({movie_ID:{$eq: id}})
    .then(response => {
        if(response){
            res.send("ESTA PELI YA EXISTE")
        }
        if(!response){
            moviesApiHandler
            .findMovieByID(id)
            .then(({ data }) => {   
                const {title, genres, overview, poster_path: poster, release_date: releaseDate, markers, id: movie_ID} = data
                Movie
                .create({title, genres, overview, poster, releaseDate, markers, movie_ID})
                .then( res.render('movies/movies-detail', { movieData: data, mapsKey }))
                .catch(err=>console.log(err))
            })
            .catch(err => next(err))
        }
    })
    .catch(err=>next(err))
})

module.exports = router