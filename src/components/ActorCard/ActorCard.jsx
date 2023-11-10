import { useNavigate } from "react-router-dom";
import "./ActorCard.css";
const image = 'https://cdn.vox-cdn.com/thumbor/KwXyAUZGjHOfbZ7Ef0AAtXnzG7M=/0x0:1409x785/1400x1050/filters:focal(734x364:735x365)/cdn0.vox-cdn.com/uploads/chorus_asset/file/8846551/Screen_Shot_2017_07_13_at_1.09.20_PM.png'

export default function ActorCard({ actor }) {
    const navigate = useNavigate();
    function showActor() {
        navigate(`/actors/${actor}`);
    }
    return (
        <div className="movie-card" onClick={showActor}>
            <img src={ image } alt={ "Steve Buscemi as " + actor } />
            <div className="card-container">
                <h4><b>{ actor }</b></h4>
                <p>All actors are in fact Steve Buscemi in disguise.</p>
            </div>
        </div>
    )
}