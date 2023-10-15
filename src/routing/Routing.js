import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import PageNotFound from "../components/PageNotFound/PageNotFound";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
