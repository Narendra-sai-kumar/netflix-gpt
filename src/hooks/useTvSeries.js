import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvSeries } from "../utils/moviesSlice";

const useTvSeries = () => {
const dispatch = useDispatch();

const tvSeries = useSelector(store => store.movies.tvSeries);

const getTvSeries = async () => {
    const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", API_OPTIONS);
    const json =  await data.json();
    console.log("TVjson", json);
    dispatch(addTvSeries(json.results))
}

useEffect(() => {
    !tvSeries && getTvSeries() 
}, [])

}

export default useTvSeries;