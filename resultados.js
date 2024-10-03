const id = localStorage.getItem("id")
const container = document.querySelector("#container")
async function buscarDetalhes(){
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        container.innerHTML = `
        <img class="img-detalhe" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
        <div class="caixa-det">
        <h2>${data.title}</h2>
        <p>Data de Lançamento: ${data.release_date}</p>
        <p>Nota: ${data.vote_average.toFixed(1)} </p> <br>
        <p> ${data.overview}</p>
        </div>
        `
        
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}
    
buscarDetalhes()

const home_btn = document.querySelector("#home_a")

home_btn.addEventListener("click", (home)=>{
    home.preventDefault()

    window.location.href = "./index.html"
})

