import axios from "axios";

export const API = {
  getMovieByTitle: async (title, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=71a9dce3&t=${title}`
      );

      await cb(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  getAllMoviesBySearch: async (title, page = 1, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=71a9dce3&s=${title}&page=${page}`
      );
      await cb(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  },
  getMovieDetails: async (movieId, cb) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`
      );

      await cb(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
