import { Link } from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/actors">Actors</Link>
            &nbsp;
            <Link className="nav-link" to="/movies">Movies</Link>
        </nav>
    )
}