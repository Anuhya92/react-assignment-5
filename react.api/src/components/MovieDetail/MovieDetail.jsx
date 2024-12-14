import { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/Api";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieById(movieId);
      setMovieDetails(movieDetails);
      const posterImage = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;
      setPosterUrl(posterImage);
    };
    getMovieDetails();
  }, [movieId]);

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <>
      <div className="movie-detail-container">
        <img
          src={posterUrl}
          alt={`${movieDetails.title} poster`}
          style={{ width: "300px" }}
        />
        <div className="movie-details">
          {movieDetails.original_language !== "en" && (
            <h2>{movieDetails.original_title}</h2>
          )}
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.tagline}</p>
          <p>IMDB rating: {movieDetails.vote_average}</p>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
      <div className="btn-container">
        <a onClick={goBack}>Go back to search</a>
      </div>
    </>
  );
};

export default MovieDetail;
