import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movie`}/>
      <MovieShow movies={movies}/>
    </div>
  );
}
export default MoviesPage;
