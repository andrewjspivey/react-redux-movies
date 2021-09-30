import axios from "axios";

export const API = {
  getMovieByTitle: async (title, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=71a9dce3&t=${title}`
      );
      cb(null, response.data);
    } catch (error) {
      cb(false);
    }
  },
  getAllMoviesBySearch: async (title, page = 1, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=71a9dce3&s=${title}&page=${page}`
      );
      cb(null, response.data);
    } catch (error) {
      cb(false);
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
