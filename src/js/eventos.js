import { consumoApi, SEARCH_URL } from "./http-provider";

export const Evento = () => {
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searhTerm = search.value;
    if (searhTerm && searhTerm !== "") {
      consumoApi(SEARCH_URL + searhTerm);
      console.log(SEARCH_URL);
      search.value = "";
    } else {
      window.location.reload();
    }
  });
};
