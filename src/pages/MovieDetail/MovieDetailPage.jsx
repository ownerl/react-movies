import { useParams } from "react-router-dom";
import { movies } from "../../data";

export default function MovieDetailPage() {
    const { movieTitle } = useParams();
    const movie = movies.find(m => (
        m.title === movieTitle
    ))
    const castMembers = movie.cast.map((member, idx) => (
        <li key={idx}>{member}</li>
    ))
    return (
        <main>
            <h1>{movie.title}</h1>
            <img src={movie.posterPath} alt={movie.title + " Movie Poster"} />
            <p>{movie.releaseDate}</p>
            <ul>
                <h3>Cast:</h3>
                {castMembers}
            </ul>
        </main>
    )
}