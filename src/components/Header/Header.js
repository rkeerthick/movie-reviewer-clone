import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    if(term === '') return alert("Enter the search term");
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('')
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="header__search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            placeholder="Search movies and shows"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="header__user-image">
        <img src={images.PROFILE_IMAGE} alt="image" />
      </div>
    </div>
  );
};

export default Header;
