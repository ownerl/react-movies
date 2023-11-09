import "./MovieCard.css";

export default function MovieCard({ posterPath, releaseDate, title }) {
    console.log('rendering movie card')
    return (
        <div className="movie-card">
            <img src={ posterPath } alt={ title + " Movie Poster"} />
            <div className="card-container">
                <h4><b>{ title }</b></h4>
                <p>Release Date: { releaseDate }</p>
            </div>
        </div>
    )
}