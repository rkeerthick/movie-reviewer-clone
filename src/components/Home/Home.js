import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/moviesSlice";
import Layout from "../Layout/Layout";
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch();
  const movie = 'Harry';
  const shows = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movie))
    dispatch(fetchAsyncShows(shows))
  }, [dispatch]);
  return (
    <Layout>
      <div style={{padding: "0px 40px"}}>
        <div className="banner__banner-img"></div>
        <MovieListing />
      </div>
    </Layout>
  );
};

export default Home;
