import React from "react";
import { useSelector } from "react-redux";
import Header from "../StyledComponents/SingleMovie/Header";
import SingleMovieContainer from "../StyledComponents/SingleMovie/SingleMovieContainer";
import DetailsContainer from "../StyledComponents/SingleMovie/DetailsContainer";
import Poster from "../StyledComponents/SingleMovie/Poster";
import HThrees from "../StyledComponents/SingleMovie/HThrees";
import SubDetails from "../StyledComponents/SingleMovie/SubDetails";

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
        <SubDetails>
          <HThrees darkMode={darkMode}>{singleMovie.Year}</HThrees>
          <HThrees darkMode={darkMode}>{singleMovie.Rated}</HThrees>
          <HThrees darkMode={darkMode}>{singleMovie.Runtime}</HThrees>
        </SubDetails>

        <div>
          <p style={{ color: darkMode ? "white" : "black", margin: 0 }}>
            {singleMovie.Plot}
          </p>
        </div>
      </DetailsContainer>
    </SingleMovieContainer>
  );
};

export default SearchedSingleMovie;
