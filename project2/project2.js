const API_KEY = '4ffa4200c7480f14add4cecc685ebb2c';
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const YOUTUBE_API_KEY = 'AIzaSyCty5k_cNWx-gujhCL0bkJNb2JrwkXfJek'; 

// Fetch Popular Movies from TMDB
async function fetchMovies() {
    try {
        const response = await fetch(TMDB_URL);
        if (!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        displayMoviesWithTrailers(data.results); // Pass movies to display function
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Fetch YouTube Trailer based on movie title
async function fetchYouTubeTrailer(movieTitle) {
    const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle + " official trailer")}&key=${YOUTUBE_API_KEY}&type=video`;

    try {
        const response = await fetch(YOUTUBE_URL);
        if (!response.ok) throw new Error("Failed to fetch YouTube trailer");

        const data = await response.json();

        // Debugging: Log the response data to ensure we're getting something back
        console.log("YouTube API response:", data);

        if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            console.log("Video ID:", videoId); // Debugging: Log video ID
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            console.log("No trailer found for movie:", movieTitle);
            return null; // No trailer found
        }
    } catch (error) {
        console.error("Error fetching YouTube trailer:", error);
        return null;
    }
}

// Display Movies with YouTube Trailers
async function displayMoviesWithTrailers(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Clear previous content

    // Loop through the movies array and create movie cards with trailers
    for (const movie of movies) {
        console.log('Movie title:', movie.title); // Debugging: Log movie titles
        const trailerUrl = await fetchYouTubeTrailer(movie.title); // Get YouTube trailer
        console.log("Trailer URL for movie:", movie.title, trailerUrl); // Debugging: Log trailer URL

        if (trailerUrl) {
            const movieCard = `
                <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="rounded-md">
                    <h3 class="text-lg font-semibold mt-2">${movie.title}</h3>
                    <p class="text-sm text-gray-400">⭐ ${movie.vote_average} | 🗓️ ${movie.release_date}</p>
                    <iframe class="w-full h-48 mt-2" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            moviesContainer.innerHTML += movieCard;
        } else {
            // If no trailer is found, still display movie poster
            const movieCard = `
                <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="rounded-md">
                    <h3 class="text-lg font-semibold mt-2">${movie.title}</h3>
                    <p class="text-sm text-gray-400">⭐ ${movie.vote_average} | 🗓️ ${movie.release_date}</p>
                    <p class="text-gray-400 mt-2">No trailer available</p>
                </div>
            `;
            moviesContainer.innerHTML += movieCard;
        }
    }
}

// Fetch movies on page load
fetchMovies();

