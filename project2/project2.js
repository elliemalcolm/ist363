const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API Key
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

async function fetchMovies() {
    try {
        const response = await fetch(TMDB_URL);
        if (!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Clear previous content

    movies.forEach(movie => {
        const movieCard = `
            <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="rounded-md">
                <h3 class="text-lg font-semibold mt-2">${movie.title}</h3>
                <p class="text-sm text-gray-400">⭐ ${movie.vote_average} | 🗓️ ${movie.release_date}</p>
            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

// Fetch movies on page load
fetchMovies();

