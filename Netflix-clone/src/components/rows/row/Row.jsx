import React, { useState, useEffect } from 'react';
import "./row.css";
import axios from "../../../http/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const baseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovies(request.data.results);
            } catch (error) {
                console.log("error:", error);
            }
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams.get('v'));
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => {
                    console.error("Error fetching trailer:", error); 
                });
        }
    };

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='rowPosters'>
                {movies.map((movie, index) => (
                    <img 
                        onClick={() => handleClick(movie)}
                        key={index}
                        src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.title || movie.name}
                        className={`rowPoster ${isLarge ? "rowPostLarge" : ""}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;




