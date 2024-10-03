async function fetchMovies() {
    const apiKey = '77c4e2b070a2e1396500d0b42ebf7cec';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = ''; 
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.addEventListener("click", async ()=>{

            window.location.href = "./resultados.html"
            localStorage.setItem("id", movie.id)

        })
        movieCard.id = movie.id
        movieCard.innerHTML = `
            <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="info">Clique no card para obter mais detalhes sobre o filme</p>
        `;

        moviesContainer.appendChild(movieCard);
    });
}

window.onload = fetchMovies;

const formulario = document.querySelector("#formulario")
const pesquisa = document.querySelector("#pesquisa")
const botao = document.querySelector("#search-button")

botao.addEventListener("click", async (btn)=>{
    btn.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&query=${pesquisa.value}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
})

formulario.addEventListener("submit", async (evento)=>{
    evento.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR&query=${pesquisa.value}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
})

const home_btn = document.querySelector("#home_a")

home_btn.addEventListener("click", (home)=>{
    home.preventDefault()

    window.location.href = "./index.html"
})