import styles from './Signup.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../firebase.js";
import {InputControl} from "../InputControl/InputControl.jsx";

export const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({name: "", email: "", password: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const registro = async () => {
        if (!values.name || !values.email || !values.password) {
            setErrorMsg("Llene todos los campos");
            return;
        }

        setErrorMsg("");
        setSubmitButtonDisabled(true);
        const {user} = await createUserWithEmailAndPassword(auth, values.email, values.password).catch((error) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(error.message);
        });

        if (user) {
            setSubmitButtonDisabled(false);
            await updateProfile(user, {displayName: values.name});
            navigate("/");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>
                    Registro
                </h1>
                <InputControl label="Nombre" placeholder="Ingrese un nombre"
                              onChange={(event) => setValues({...values, name: event.target.value})}/>

                <InputControl label="Correo" placeholder="Ingrese un correo"
                              onChange={(event) => setValues({...values, email: event.target.value})}/>

                <InputControl label="Contraseña" placeholder="Ingrese una contraseña"
                              onChange={(event) => setValues({...values, password: event.target.value})}/>
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={registro} disabled={submitButtonDisabled}>Guardar</button>
                    <p>
                        Si ya tienes una cuenta inicia sesion
                        <span>
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}