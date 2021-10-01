import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../StyledComponents/SingleMovie/Header";
import SingleMovieContainer from "../StyledComponents/SingleMovie/SingleMovieContainer";
import DetailsContainer from "../StyledComponents/SingleMovie/DetailsContainer";
import Poster from "../StyledComponents/SingleMovie/Poster";
import HThrees from "../StyledComponents/SingleMovie/HThrees";
import SubDetails from "../StyledComponents/SingleMovie/SubDetails";
import { AiFillStar } from "react-icons/ai";
import { GiTomato } from "react-icons/gi";
import SubDetailsContainer from "../StyledComponents/SingleMovie/SubDetailsContainer";
import Contributions from "../StyledComponents/SingleMovie/Contributions";

const SearchedSingleMovie = () => {
  const singleMovie = useSelector((state) => state.singleMovie);
  const [genres, setGenres] = useState([]);
  const darkMode = useSelector((state) => state.darkMode);

  const splitGenres = (str) => {
    return str.split(", ");
  };

  useEffect(() => {
    if (singleMovie.Genre) {
      const genresArr = splitGenres(singleMovie.Genre);
      setGenres(genresArr);
    }
    console.log(singleMovie);
  }, [singleMovie]);

  return (
    <SingleMovieContainer>
      <div>
        <Poster src={singleMovie.Poster} alt="" />
      </div>
      <DetailsContainer>
        <Header darkMode={darkMode}>{singleMovie.Title}</Header>
        <SubDetailsContainer>
          <SubDetails>
            <HThrees darkMode={darkMode}>{singleMovie.Year}</HThrees>
            <HThrees darkMode={darkMode}>{singleMovie.Rated}</HThrees>
            <HThrees darkMode={darkMode}>{singleMovie.Runtime}</HThrees>
          </SubDetails>
          {singleMovie.imdbRating && (
            <HThrees darkMode={darkMode}>
              <AiFillStar color="gold" /> IMDB Rating: {singleMovie.imdbRating}
              /10
            </HThrees>
          )}
          <div style={{ display: "flex" }}>
            {genres.length > 1 ? (
              genres.map((genre, index) => (
                <HThrees darkMode={darkMode} key={index}>
                  {genre}
                </HThrees>
              ))
            ) : (
              <HThrees darkMode={darkMode}>{singleMovie.Genre}</HThrees>
            )}
          </div>
        </SubDetailsContainer>
        <div>
          <p
            style={{
              color: darkMode ? "white" : "black",
              margin: "2rem 0rem 0rem 0.5rem",
              textAlign: "left",
            }}
          >
            {singleMovie.Plot}
          </p>
        </div>
        <SubDetailsContainer>
          {singleMovie.Actors && (
            <Contributions>
              <HThrees darkMode={darkMode}>
                Director: {singleMovie.Director}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Writer: {singleMovie.Writer}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Actors: {singleMovie.Actors}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Awards: {singleMovie.Awards}
              </HThrees>
            </Contributions>
          )}
          {singleMovie.Ratings && (
            <div
              style={{
                display: "flex",
                width: "40%",
                flexDirection: "column",
              }}
            >
              <HThrees darkMode={darkMode}>
                <GiTomato color="red" /> {singleMovie.Ratings[1].Source}:{" "}
                {singleMovie.Ratings[1].Value}
              </HThrees>
              <HThrees darkMode={darkMode}>
                <AiFillStar color="gold" /> IMDB: {singleMovie.imdbRating}
                /10
              </HThrees>
              <HThrees darkMode={darkMode}>
                {singleMovie.Ratings[0].Source}: {singleMovie.Ratings[0].Value}
              </HThrees>
              <HThrees darkMode={darkMode}>
                {singleMovie.Ratings[2].Source}: {singleMovie.Ratings[2].Value}
              </HThrees>
            </div>
          )}
        </SubDetailsContainer>
      </DetailsContainer>
    </SingleMovieContainer>
  );
};

export default SearchedSingleMovie;
