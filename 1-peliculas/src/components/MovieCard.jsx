import styles from "./MovieCard.module.css";
import {Link} from "react-router-dom";

export const MovieCard = ({movie}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img src={imageUrl} width={230} height={345} alt={movie.title} className={styles.movieImage}/>
            </Link>
            <div className={styles.title}>
                {movie.title}
            </div>
        </li>
    );
}