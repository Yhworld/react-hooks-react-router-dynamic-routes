import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const renderMovies = Object.keys(movies).map((movie) => {
    return (
      <li key={movie}>
        <Link to={`/movies/${movie}`}>{movies[movie].title}</Link>
      </li>
    );
  });
  return <ul>{renderMovies}</ul>;
}
export default MoviesList;
