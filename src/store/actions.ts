import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
//import movieList from 'src/components/movieList';
import moviesList from "../../public/moviesList";

export const buttonClicked = createAction("app/buttonClicked");

// api docs: http://www.omdbapi.com/
export const movieUrl =
  "https://www.omdbapi.com/?apiKey=16073636&t=Brooklyn+Nine+Nine";

export const fetchMovies = createAsyncThunk(
  "app",
  async (args, { dispatch }) => {
    try {
      dispatch({ type: "app/pending" });
      // put your fetch logic here
      // use the dispatch method from arguments
      // You can use native fetch from browser
      // or axios which is installed as a dependency
      const data = await axios.get(movieUrl).then((res) => {
        dispatch({ type: "app/fulfilled", payload: res.data });
        console.log("data fetched: ", data);
      });
    } catch (e) {
      dispatch({ type: "app/rejected", payload: e.message });
    }
  }
);
