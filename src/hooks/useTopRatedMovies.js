import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/top_rated?&page=1",
    //   API_OPTIONS
    // );

    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=vote_average.desc&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-12-31&region=US&page=1",
      API_OPTIONS
    );


    
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;