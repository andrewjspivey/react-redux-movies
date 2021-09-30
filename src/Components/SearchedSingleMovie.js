import React from "react";
import { useSelector } from "react-redux";
import Header from "../StyledComponents/SingleMovie/Header";
import SingleMovieContainer from "../StyledComponents/SingleMovie/SingleMovieContainer";
import DetailsContainer from "../StyledComponents/SingleMovie/DetailsContainer";
import Poster from "../StyledComponents/SingleMovie/Poster";

const SearchedSingleMovie = () => {
  const singleMovie = useSelector((state) => state.singleMovie);
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <SingleMovieContainer>
      <div>
        <Poster src={singleMovie.Poster} alt="" />
      </div>
      <DetailsContainer>
        <Header darkMode={darkMode}>{singleMovie.Title}</Header>
        <h2 style={{ color: darkMode ? "white" : "black" }}>
          {singleMovie.Year}
        </h2>
        <div>
          <p style={{ color: darkMode ? "white" : "black" }}>
            {singleMovie.Plot}
          </p>
        </div>
      </DetailsContainer>
    </SingleMovieContainer>
  );
};

export default SearchedSingleMovie;
