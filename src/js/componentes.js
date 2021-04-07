import "../css/componentes.css";
import { consumoApi } from "./http-provider";
const header = document.querySelector("header");
export const main = document.querySelector("main");

export const Search = () => {
  const html = `
  <form id="form">
      <input type="text" id="search" class="search" placeholder="Search">
  </form>`;
  header.innerHTML = html;
};

export const Main = () => {
  consumoApi();
};

export const puntuacionPelicula = (voto) => {
  if (voto >= 8) {
    return "green";
  } else if (voto >= 5) {
    return "orange";
  } else {
    ("red");
  }
};
