import { main, puntuacionPelicula } from "./componentes";
import { Evento } from "./eventos";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

export const IMG_PATH = "https://image.tmdb.org/t/p/w500";
export const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

export const consumoApi = async () => {
  try {
    const resp = await fetch(API_URL);
    if (!resp.ok) return alert("no se pudo realizar la peticion");
    const consumo = await resp.json();
    mostrarPelicula(consumo.results);
    return consumo;
  } catch (error) {
    throw error;
  }
};

export const mostrarPelicula = (peliculas) => {
  peliculas.forEach((peliculas) => {
    const { title, poster_path, vote_average, overview } = peliculas;
    const listaPeli = document.createElement("div");
    listaPeli.classList.add("movie");
    
    listaPeli.innerHTML = `
    <img src="${IMG_PATH + peliculas.poster_path}" alt="${peliculas.title}" />
    <div class="movie-info">
      <h3>${peliculas.title}</h3>
      <span class="${puntuacionPelicula(peliculas.vote_average)}">${
      peliculas.vote_average
    }</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
     ${peliculas.overview}
    </div>`;
    main.appendChild(listaPeli);
  });

};
