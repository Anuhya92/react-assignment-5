import axios from "axios";

const API_KEY = "7c56568799fbcb15ce10e25346c20442";
const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU2NTY4Nzk5ZmJjYjE1Y2UxMGUyNTM0NmMyMDQ0MiIsIm5iZiI6MTczMzk0NDY2Mi45NjIsInN1YiI6IjY3NTllNTU2ZmEwMDRjYTA2Mjk2NzI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6DNG4pSP70cMCKGDAV8vkyuXJKrVNHRGT57nuYPXHJg",
  },
};

export const fetchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return response.json();
};

export const fetchMovieById = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}`, options);
  return response.json();
};
