import styles from "./Login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {InputControl} from "../InputControl/InputControl.jsx";
import {useState} from "react";
import {auth} from "../../firebase.js";
import {signInWithEmailAndPassword} from "firebase/auth";

export const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const login = async () => {
        if (!value.email || !value.password) {
            setError("Datos incompletos");
            return;
        }

        setError("");
        setSubmitButtonDisabled(true);
        const result = await signInWithEmailAndPassword(auth, value.email, value.password).catch((error) => {
            setError(error.message);
        });

        if (result) {
            setSubmitButtonDisabled(false);
            navigate("/")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>
                <InputControl label="Email" placeholder="Ingrese un email"
                              onChange={(event) => setValue({...value, email: event.target.value})}/>
                <InputControl label="Contraseña" placeholder="Ingrese una contraseña"
                              onChange={(event) => setValue({...value, password: event.target.value})}/>
                <div className={styles.footer}>
                    <b className={styles.error}>{error}</b>
                    <button onClick={login} disabled={submitButtonDisabled}>Login</button>
                </div>
                <p>
                    Crear cuenta
                    <span>
                        <Link to="/signup"> Ir</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}