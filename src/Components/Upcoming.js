import React from 'react';
import useFetchData from "../hooks/useFetchData";
import Movie from './Movie';

export default function Upcoming() {
var ans = useFetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=f6866ecb64af726c47ad422d7b08e283&language=en-US&page=1`);
  console.log("ans",ans);
  return (
   <>
   <Movie p1={ans} />
   </>
  )
}
