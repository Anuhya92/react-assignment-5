import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
