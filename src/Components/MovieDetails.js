import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/dataActions";
import { useParams } from "react-router-dom";
import { API } from "../API/API";
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

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.movieDetails);
  const darkMode = useSelector((state) => state.darkMode);
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    API.getMovieDetails(params.id, (data) =>
      dispatch(getMovieDetailsById(data))
    );
  }, []);

  const splitGenres = (str) => {
    return str.split(", ");
  };

  useEffect(() => {
    if (movieDetails.Genre) {
      const genresArr = splitGenres(movieDetails.Genre);
      setGenres(genresArr);
    }
    console.log(movieDetails);
  }, [movieDetails]);

  return (
    <SingleMovieContainer>
      <div>
        <Poster src={movieDetails.Poster} alt="" />
      </div>
      <DetailsContainer>
        <Header darkMode={darkMode}>{movieDetails.Title}</Header>
        <SubDetailsContainer>
          <SubDetails>
            <HThrees darkMode={darkMode}>{movieDetails.Year}</HThrees>
            <HThrees darkMode={darkMode}>{movieDetails.Rated}</HThrees>
            <HThrees darkMode={darkMode}>{movieDetails.Runtime}</HThrees>
          </SubDetails>
          {movieDetails.imdbRating && (
            <HThrees darkMode={darkMode}>
              <AiFillStar color="gold" /> IMDB Rating: {movieDetails.imdbRating}
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
              <HThrees darkMode={darkMode}>{movieDetails.Genre}</HThrees>
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
            {movieDetails.Plot}
          </p>
        </div>
        <SubDetailsContainer>
          {movieDetails.Actors && (
            <Contributions>
              <HThrees darkMode={darkMode}>
                Director: {movieDetails.Director}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Writer: {movieDetails.Writer}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Actors: {movieDetails.Actors}
              </HThrees>
              <HThrees darkMode={darkMode}>
                Awards: {movieDetails.Awards}
              </HThrees>
            </Contributions>
          )}
          {movieDetails.Ratings && (
            <div
              style={{
                display: "flex",
                width: "40%",
                flexDirection: "column",
              }}
            >
              {movieDetails.Ratings[1]?.Source && (
                <HThrees darkMode={darkMode}>
                  <GiTomato color="red" /> {movieDetails.Ratings[1].Source}:{" "}
                  {movieDetails.Ratings[1].Value}
                </HThrees>
              )}
              <HThrees darkMode={darkMode}>
                <AiFillStar color="gold" /> IMDB: {movieDetails.imdbRating}
                /10
              </HThrees>
              {movieDetails.Ratings[0]?.Source && (
                <HThrees darkMode={darkMode}>
                  {movieDetails.Ratings[0].Source}:{" "}
                  {movieDetails.Ratings[0].Value}
                </HThrees>
              )}
              {movieDetails.Ratings[2]?.Source && (
                <HThrees darkMode={darkMode}>
                  {movieDetails.Ratings[2].Source}:{" "}
                  {movieDetails.Ratings[2].Value}
                </HThrees>
              )}
            </div>
          )}
        </SubDetailsContainer>
      </DetailsContainer>
    </SingleMovieContainer>
  );
};

export default MovieDetails;
