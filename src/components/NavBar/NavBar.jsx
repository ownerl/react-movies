import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/actors">Actors</Link>
            &nbsp;
            <Link to="/movies">Movies</Link>
            &nbsp;
            <Link to="/movies/details">Movie Details</Link>
        </nav>
    )
}