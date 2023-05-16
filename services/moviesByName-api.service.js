const axios = require('axios')

class MoviesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api.themoviedb.org/3'
        }),
        this.key = process.env.API_KEY
    }

    findMovieByName(title) {
        let queryTitle = title.toLowerCase().split(" ").join("+");
        return this.axiosApp.get(`/search/movie?api_key=${this.key}&query=${queryTitle}`)  

    }
    findMovieByID(id){
        return this.axiosApp.get(`movie/${id}?api_key=${this.key}`)
    }

}

module.exports = new MoviesApiHandler()