import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      if (searchTerm.trim() === "") return;
      const movieData = await fetchMovies(searchTerm);
      setMovies(movieData.results);
    };

    getMovies();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const showMovieDetails = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="movie-list">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <h3 onClick={() => showMovieDetails(movie.id)}>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>No movies found, try searching for some...</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
