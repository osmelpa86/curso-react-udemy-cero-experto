import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers/AppRoutes.jsx";

function App() {
    return (
        <BrowserRouter>
            <header>
                <h1 className="title">🎬Peliculas</h1>
            </header>

            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;