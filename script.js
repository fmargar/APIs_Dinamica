const resultsContainer = document.getElementById('resultsContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// URL base de la API
const API_BASE_URL = 'https://rickandmortyapi.com/api/character';


async function fetchCharacters(name = '') {
    try {
        // Construimos la URL con el parámetro de búsqueda si existe
        const url = name ? `${API_BASE_URL}/?name=${name}` : API_BASE_URL;
        
        const response = await fetch(url);

        // Si la respuesta no es correcta (ej. 404), lanzamos error
        if (!response.ok) {
            throw new Error('No se han encontrado resultados');
        }

        const data = await response.json();
        renderCards(data.results);
        
    } catch (error) {
        resultsContainer.innerHTML = `<p class="error-msg">${error.message}</p>`;
    }
}

function renderCards(characters) {
    // Limpiamos el contenido previo
    resultsContainer.innerHTML = '';

    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';

        // Determinamos la clase según si está vivo o muerto
        const statusClass = char.status.toLowerCase() === 'alive' ? 'status-alive' : 'status-dead';

        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <div class="card-info">
                <h3>${char.name}</h3>
                <p>Especie: ${char.species}</p>
                <p>Estado: <span class="${statusClass}">${char.status}</span></p>
                <p>Origen: ${char.origin.name}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// Evento para realizar la búsqueda al hacer clic
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchCharacters(query);
});

// Carga inicial de todos los personajes al abrir la página
document.addEventListener('DOMContentLoaded', () => fetchCharacters());