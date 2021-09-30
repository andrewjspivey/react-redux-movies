import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/dataActions";
import { useParams } from "react-router-dom";
import { API } from "../API/API";
import Header from "../StyledComponents/SingleMovie/Header";
import SingleMovieContainer from "../StyledComponents/SingleMovie/SingleMovieContainer";
import DetailsContainer from "../StyledComponents/SingleMovie/DetailsContainer";
import Poster from "../StyledComponents/SingleMovie/Poster";

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.movieDetails);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    API.getMovieDetails(params.id, (data) =>
      dispatch(getMovieDetailsById(data))
    );
  }, []);

  return (
    <SingleMovieContainer>
      <div>
        <Poster src={movieDetails.Poster} alt="" />
      </div>
      <DetailsContainer>
        <Header darkMode={darkMode}>{movieDetails.Title}</Header>
        <h2 style={{ color: darkMode ? "white" : "black" }}>
          {movieDetails.Year}
        </h2>
        <div>
          <p style={{ color: darkMode ? "white" : "black" }}>
            {movieDetails.Plot}
          </p>
        </div>
      </DetailsContainer>
    </SingleMovieContainer>
  );
};

export default MovieDetails;
