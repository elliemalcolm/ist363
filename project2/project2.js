const API_KEY = '4ffa4200c7480f14add4cecc685ebb2c';
const YOUTUBE_API_KEY = 'AIzaSyCty5k_cNWx-gujhCL0bkJNb2JrwkXfJek';

const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// Favorite Movie Titles
const favoriteTitles = ["The Grinch", "Someone Great", "The Hangover"];

// Fetch Popular Movies
async function fetchMovies() {
  try {
    const response = await fetch(TMDB_URL);
    if (!response.ok) throw new Error('Failed to fetch movies');
    const data = await response.json();
    displayMoviesWithTrailers(data.results, 'movies-container');
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Fetch Movie Info by Title (for Favorites)
async function fetchMovieByTitle(title) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to search movie');
    const data = await response.json();
    return data.results[0]; // Return the first match
  } catch (error) {
    console.error('Error fetching movie by title:', error);
    return null;
  }
}

// Fetch YouTube Trailer
async function fetchYouTubeTrailer(title) {
  const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(title + " official trailer")}&key=${YOUTUBE_API_KEY}&type=video`;

  try {
    const response = await fetch(YOUTUBE_URL);
    if (!response.ok) throw new Error("Failed to fetch trailer");
    const data = await response.json();
    if (data.items.length > 0) {
      return `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    } else {
      return null;
    }
  } catch (error) {
    console.error("YouTube trailer error:", error);
    return null;
  }
}

// Display Movies in Given Container
async function displayMoviesWithTrailers(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  for (const movie of movies) {
    const trailerUrl = await fetchYouTubeTrailer(movie.title || movie.original_title);
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Image';

    const card = `
      <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src="${posterUrl}" alt="${movie.title}" class="rounded-md">
        <h3 class="text-lg font-semibold mt-2">${movie.title}</h3>
        <p class="text-sm text-gray-400">⭐ ${movie.vote_average || 'N/A'} | 🗓️ ${movie.release_date || 'Unknown'}</p>
        ${
          trailerUrl
            ? `<iframe class="w-full h-48 mt-2" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>`
            : `<p class="text-gray-400 mt-2">No trailer available</p>`
        }
      </div>
    `;
    container.innerHTML += card;
  }
}

// Load Favorite Movies
async function loadFavoriteMovies() {
  const favoriteMovies = [];

  for (const title of favoriteTitles) {
    const movie = await fetchMovieByTitle(title);
    if (movie) favoriteMovies.push(movie);
  }

  displayMoviesWithTrailers(favoriteMovies, 'favorites-container');
}

// Initialize both sections
loadFavoriteMovies();
fetchMovies();
