import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../Login/LoginPage";
import ActorListPage from "../ActorList/ActorListPage";
import MovieListPage from "../MovieList/MovieListPage";
import MovieDetailPage from "../MovieDetail/MovieDetailPage";
import ActorDetailPage from "../ActorDetail/ActorDetailPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
    const [user, setUser] = useState(null);
    return (
        <main className="App">
            {user ? (
                <>
                    <NavBar />
                    <Routes className="main-content">
                        <Route path="/actors" element={<ActorListPage />} />
                        <Route path="/movies" element={<MovieListPage />} />
                        <Route
                            path="/movies/:movieTitle"
                            element={<MovieDetailPage />}
                        />
                        <Route
                            path="/actors/:actorName"
                            element={<ActorDetailPage />}
                        />
                    </Routes>
                    <h1>Greetings {user}!</h1>
                </>
            ) : (
                <LoginPage setUser={setUser} />
            )}
        </main>
    );
}
