import React, { useState, useEffect } from 'react';
import axi from "../../http/axios";
import requests from '../../http/requests';
import "./banner.css"
function Banner() {
    const [movie,setMovie]=useState({});
        useEffect(()=>{
            (async () => {
                try {
                    const request= await axi.get(requests.ComedyMovies)
                    setMovie(request.data.results[
                        Math.floor(Math.random()*request.data.results.length)
                    ]);
                    
                } catch (error) {
                    console.log("error",error)
                }
            })()
        },[]);

        const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;}
  return (
    < div className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}>
        <div className='bannerContents'>
            <h1 className='bannerTitle'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='Buttons'>
                <button className='playButton'>Play</button>
                <button className='myListButton'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate(movie?.overview,150)}

            </h1>
        </div>
        <div className='fadeButtom'/>
            

    </div>
  )
}

export default Banner

