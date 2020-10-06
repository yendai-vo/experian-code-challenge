import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

export function Button() {
  const dispatch = useDispatch();
  const onClick = () => fetchMovies();

  return <button onClick={onClick}>Get a movie</button>;
}
