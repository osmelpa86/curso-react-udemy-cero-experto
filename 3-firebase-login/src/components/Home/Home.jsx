import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase.js";

export const Home = (props) => {
    const navigate = useNavigate();
    const exit = () => {
        auth.signOut();
        navigate('/');
    }
    return (<div>
        <div>
            <h1>
                <Link to="/login">Login</Link>
            </h1>
            <br/>
            <h1>
                <Link to="/signup">Registrar</Link>
            </h1>
        </div>
        <h2>{props.name ? `Bienevenido-${props.name}` : "Inicie sesion"}</h2>
        <button onClick={exit}>Salir</button>
    </div>)
}