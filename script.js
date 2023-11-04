
let apiKey = '822ed298c1c52d0c2c612e1d536bde7d';
let baseUrl = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click', searchMovie)

let resultContainer= document.getElementById('results');

function searchMovie(){
    resultContainer.innerHTML = 'cargango...';

    let searchInput = document.getElementById('searchInput').value;
    
    fetch(`${baseUrl}?api_key=${apiKey}&query=${searchInput}`)
    .then(movie => movie.json())
    .then(movie=>{
        displayMovies(movie.results);
    })
}

function displayMovies(movie){
    resultContainer.innerHTML = '';

    if(movie.length === 0){
        resultContainer.innerHTML = '<p>Por  favor, busca una pelicula</p>';
        return;
    }

    movie.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = movie.title;

        let realese = document.createElement('p');
        realese.textContent = `La fecha de lazamiento fue: ${movie.release_date}`;

        let overview = document.createElement('p');
        overview.textContent = `Descripción: ${movie.overview}`;

        let urlPoster = `${urlImg}${movie.poster_path}`;

        let poster = document.createElement('img');
        poster.src = urlPoster;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(realese);
        movieDiv.appendChild(overview);

        resultContainer.appendChild(movieDiv);
    });

}
