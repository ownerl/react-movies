import { movies } from "../../data";

export default function ActorListPage() {
    let casts = []
    movies.forEach((m, idx) => (
        casts = casts.concat(m.cast)
    ))

    const castSet = new Set(casts);
    const castArray = Array.from(castSet)
    console.log(casts)
    const castCards = castArray.map((a, idx) => (
        <li>
            <h4>{a}</h4>
        </li>
    ))
    
    return (
        <main>
            <h1>Actor list</h1>
            <ul>{castCards}</ul>
        </main>
    )
}