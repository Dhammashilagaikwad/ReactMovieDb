import React from 'react';
import { Link } from 'react-router';
import "./css/style.css";


export default function Movie({ p1 }) {
    console.log("p1", p1)
    return (
      
        <div className='container'>
            <div className='row'>
                {
                    p1 && p1.map(({
                        original_title
                        ,
                        vote_average
                        ,
                        poster_path,id
                    }) => (
                        <div className='col-3 text-center mt-5 g-5'>
                            <Link to={"/single-movie/"+id}>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_path} className='img-fluid rounded shadow-lg' alt='movie' />
                           </Link>
                            <p>{original_title}</p>
                            <p>{vote_average.toFixed(1)}</p>
                            <p>
                          
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}
