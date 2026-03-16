import placeholder from "../img/placeholder.png";

export const getMovieImages = (path, width) => {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}