const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

const {defaultValue: sneakyMovieID} = document.querySelector('#movieID')
let myMap

function initMapWithMarkers(){
  initMap()
  getMarkersJSON()
}

function getMarkersJSON() {
  fetch('/api/markers')
  .then(res => res.json())
  .then(markersJSON => renderMarkers(markersJSON))
  .catch(err => next(err))
}

function renderMarkers(markersJSON) {

 markersJSON.forEach(marker => {
  if(sneakyMovieID === marker.movie_ID) {

    const markerCoords = { lat: marker.location.coordinates[1], lng: marker.location.coordinates[0] }
  
     new google.maps.Marker({
      map: myMap,
      position: markerCoords,
      title: marker.name
    }) 

  }
})

}

function initMap() {

   myMap = new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 3,
      center: ironhackCoords,
      styles: mapStyles.retro
    }
  )

}