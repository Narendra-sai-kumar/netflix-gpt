import React from 'react'
import Header from '../Header'

import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import useTvSeries from '../../hooks/useTvSeries'
import useTopRatedMovies from '../../hooks/useTopRatedMovies';

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTvSeries();
  return (
    <div className="" >
      <Header/> 
      
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse