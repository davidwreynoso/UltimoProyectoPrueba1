// 1. voy a necesitar una API
// 2.  necesito contenedor de HTML p/renderizar contenido
const $contenedor =document.getElementById("personajes")
const URL_API ="https://rickandmortyapi.com/api/character/?page=3"

// promesas usando asincronismo en JS
fetch(URL_API)
.then((response) => {
    return response.json();
}).then((data) => {
    const personajes=data.results;
    /* console.log(personajes); */
    for (let i = 0; i < personajes.length; i++) {
        // destructuring
        const {name, gender, species, status, image, url,created} =personajes[i]
        $contenedor.innerHTML+=`<div class="cont-personaje">
        <img src="${image}" alt="Imagen de ${name}">
        <h3>Character: ${name}</h3>
        <p>Genre ${gender}</p>
        <p>Specie ${species}</p>
        <p></p>
    </div>`
    
        /* h1 28" */
    }
});

