import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fetchdata from '../utilities/fetchdata';
import images from "./images/bydefaultimage.webp";
import "./css/style.css";

export default function Moviepage() {
    var [info, setInfo] = useState({});
    var [cast, setCast] = useState([]);


    let urlValue = useParams();
    // console.log(urlValue['movieid']);

    useEffect(() => {
        var castApi = `https://api.themoviedb.org/3/movie/${urlValue['movieid']}/credits?api_key=f6866ecb64af726c47ad422d7b08e283&language=en-US`;
        console.log("castApi", castApi)
        var movieDetails = `https://api.themoviedb.org/3/movie/${urlValue['movieid']}?api_key=f6866ecb64af726c47ad422d7b08e283&language=en-US`;


        fetchdata(castApi)
            .then(result => {
                console.log(result);
                setCast(result.cast);
            })

        fetchdata(movieDetails)
            .then(result => {
                console.log(result);
                setInfo(result);
            })
    }, [urlValue['movieid']])

    return (
        <div className='container'>
            <div className='row mt-5 singlemovie text-white shadow-lg rounded'>
                <div className='col-9'>
                    <h2 className='mt-5 ms-3 fw-bold' >{info.original_title
                    }</h2>
                    <p className='mt-3 mb-0 ms-3 fw-bold'>Rating: {info.vote_average ? info.vote_average.toFixed(1) : "N/A"}</p>
                    <p className='ms-3'>Release Date: {info.
                        release_date
                    }  </p>
                    <p className='ms-3'>Tagline: {info.tagline}</p>
                    <p className='fw-bold fs-5 mb-0'>overview:</p>{info.overview}
                </div>

                <div className='col-3 me-0'>
                    <img src={"https://image.tmdb.org/t/p/w500" + info.poster_path} className='img-fluid rounded border-none' alt='movieimage' />
                </div>
            </div>


            <div className='row'>
                <h1 className='mt-4 mb-3 text-white'>cast</h1>
                {
                    cast && cast.map(({ name,
                        profile_path
                    }, index) =>
                        <div className='col-2 ' key={index}>
                            <img
                                src={profile_path ? "https://image.tmdb.org/t/p/w500" + profile_path : images}
                                className='img-fluid rounded'
                                alt={name}
                            />

                            <p>{name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
