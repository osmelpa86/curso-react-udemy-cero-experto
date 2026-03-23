import './App.css'
import {AppRoutes} from "./routes/AppRoutes.jsx";
import {Header} from "./components/Header.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes/>
        </div>
    )
}

export default App
