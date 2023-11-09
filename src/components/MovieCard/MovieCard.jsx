import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ posterPath, releaseDate, title }) {
    const navigate = useNavigate();
    function showMovie() {
        navigate(`/movies/${title}`);
    }
    console.log('rendering movie card')
    return (
        <div className="movie-card" onClick={showMovie}>
            <img src={ posterPath } alt={ title + " Movie Poster"} />
            <div className="card-container">
                <h4><b>{ title }</b></h4>
                <p>Release Date: { releaseDate }</p>
            </div>
        </div>
    )
}