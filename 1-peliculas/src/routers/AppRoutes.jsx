import {Routes, Route} from "react-router-dom";
import {LoadingPage} from "../pages/LoadingPage.jsx";
import {MovieDetails} from "../pages/MovieDetails.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoadingPage/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
        </Routes>
    );
};