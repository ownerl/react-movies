import { movies } from "../../data";
import "./MovieListPage.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage() {
    const movieList = movies.map((m, idx) => (
        <MovieCard key={idx} posterPath={m.posterPath} title={m.title} releaseDate={m.releaseDate}/>
    ));
    return (
        <main>
            <div className="movie-card-list">
                {movieList}
            </div>
        </main>
    )
}