import { useParams } from "react-router-dom";
import { movies } from "../../data";
import "./ActorDetailPage.css";

export default function ActorDetailPage() {
    // below is just a parameter object, it can includ multiple items
    const actorParam = useParams();
    const name = actorParam.actorName
    console.log(typeof(actorParam),' something someting ', actorParam)
    const filmography = movies.filter(movie => movie.cast.some(actor => actor === name)).map((movie, idx) => <li key={idx}>{movie.title}</li>)
    console.log(filmography)

    return (
        <main>
            <h2>{name}'s Filmography</h2>
            <ul>{filmography}</ul>
        </main>
    )
}