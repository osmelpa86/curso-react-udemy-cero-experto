import {useEffect, useState} from "react";
import {get} from "../data/httpClient.js";
import {MovieCard} from "./MovieCard.jsx";
import "./ContextMovieCard.css";

export const ContextMovieCard = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/movie/popular").then((data) => {
            setMovies(data.results);
        });
    }, []);
    return (
        <ul className="container">
            {
                movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
            }
        </ul>
    );
}