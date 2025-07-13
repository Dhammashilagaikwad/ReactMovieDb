import React from 'react'
import { useParams } from 'react-router'
import useFetchData from '../hooks/useFetchData'
import Movie from './Movie'

export default function Searchform() {
    let urldata = useParams();
    console.log(urldata['moviename']);

    var apiPath = `https://api.themoviedb.org/3/search/movie?api_key=f6866ecb64af726c47ad422d7b08e283&language=en-US&query=${urldata['moviename']}&page=1`;

    // console.log(apiPath,[urldata['moviename']])

    var ans = useFetchData(apiPath,[urldata['moviename']]);

  return (
    <>
      <Movie p1={ans} />
      </>
  )
}
