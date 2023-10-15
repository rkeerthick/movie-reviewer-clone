import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { getAllMovies, getAllShows } from "../../features/movies/moviesSlice";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}  />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-listing">
      <div className="movie-listing__movie-wrapper">
        <div className="movie-lising__movie-list">
          <h2>Movies</h2>
          <div className="movie-listing__movie-container">{renderMovies}</div>
        </div>
        <div className="movie-lising__shows-list">
          <h2>Shows</h2>
          <div className="movie-listing__movie-container">{renderShows}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
