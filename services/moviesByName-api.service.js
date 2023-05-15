const axios = require('axios')

class MoviesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    findMoviesByName() {
        return this.axiosApp.get('/characters')
    }

}

const moviesApiHandler = new MoviesApiHandler()

module.exports = moviesApiHandler