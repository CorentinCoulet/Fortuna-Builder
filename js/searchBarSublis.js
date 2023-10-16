const searchBar = document.querySelector('.search-bar-subli');
const searchButton = document.querySelector('.search-button-subli');
const searchResults = document.querySelector('.search-results-subli');

searchButton.addEventListener('click', () => {
    const query = searchBar.value;
    displaySearchResults(query);
});

function displaySearchResults(query) {
    const results = ["Résultat 1", "Résultat 2", "Résultat 3"];
    searchResults.innerHTML = '';

    if (query) {
        results.forEach((result) => {
            if (result.toLowerCase().includes(query.toLowerCase())) {
                const resultElement = document.createElement('div');
                resultElement.classList.add('search-result');
                resultElement.textContent = result;
                searchResults.appendChild(resultElement);
            }
        });
    }
}
