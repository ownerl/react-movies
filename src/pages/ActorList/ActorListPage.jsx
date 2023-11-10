import { movies } from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";
import "./ActorListPage.css";

export default function ActorListPage() {
    let casts = []
    movies.forEach((m, idx) => (
        casts = casts.concat(m.cast)
    ))
    const castSet = new Set(casts);
    const castArray = Array.from(castSet)
    const castCards = castArray.map((a, idx) => (
        <ActorCard key={idx} actor={a}/>
    ))

    return (
        <main>
            <div className="actor-card-list">
                {castCards}
            </div>
        </main>
    )
}