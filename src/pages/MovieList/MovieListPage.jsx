import { movies } from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage() {
    const movieList = movies.map((m, idx) => (
        <MovieCard posterPath={m.posterPath} title={m.title} releaseDate={m.releaseDate}/>
    ))
    return (
        <main>
            {movieList}
        </main>
    )
}