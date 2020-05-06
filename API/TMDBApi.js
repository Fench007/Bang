// const API_TOKEN = "c1a5aa852c35c73b39a970e3204eb11e";

// export function getFilmsFromApiWithSearchedText (text, page) {
//     const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
//     return fetch(url)
//       .then((response) => response.json())
//       .catch((error) => console.error(error))
//   }

// export function getImageFromApi (name) {
//     return 'https://image.tmdb.org/t/p/w300' + name
// }

// // Récupération du détail d'un film
// export function getFilmDetailFromApi (id) {
//   return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// }


// ----- DEEZER ----- //

const API_TOKEN = "c1a5aa852c35c73b39a970e3204eb11e";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.deezer.com/chart/0/artists' 
    // + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération du détail d'un film

export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}