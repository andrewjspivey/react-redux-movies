import axios from "axios";

export const API = {
  getMovieByTitle: async (title, cb) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=71a9dce3&t=${title}`
    );

    await cb(response.data);
  },
  getAllMoviesBySearch: async (title, cb) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=71a9dce3&s=${title}`
    );

    await cb(response.data.Search);
  },
  getMovieDetails: async (movieId, cb) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`
    );

    await cb(response.data);
  },
};
