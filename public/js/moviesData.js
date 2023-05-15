
const getMovieData = (title) => {
    axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=41d7a5818bbe0bfdc06a7231d15d842f&query=the+avengers')
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }
