
import { useNavigate } from "react-router"
import {useState} from "react"
import { useLocation } from "react-router";
import './login.css'
import { Link } from "react-router";

function Login() {

    const navigate = useNavigate()
    const location = useLocation();

    const MockUser = location.state
    
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")

    const ValidateUserInfo = () => {
        if (campoEmail.trim() === "" || campoPassword.trim() === "") {
            alert("Por favor, complete todos los campos.")
            return
        }
        if (!MockUser) {
            alert("No hay usuario registrado. Por favor, regístrese primero.")
            navigate("/register")
            return
        }
        if (campoEmail === MockUser.email && campoPassword === MockUser.password) {
            alert("Inicio de sesión exitoso")
            navigate("/dashboard")
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }
    return (
        <div id="auth-container">
                <div id="login-box">
                    <h1>Bienvenido de nuevo</h1>
                    <p>Innovación y seguridad al servicio de tus finanzas.</p>
                    <input type="text" value={campoEmail} className="login_input" 
                    placeholder="Ingrese su E-mail" 
                    onChange={(e) => setCampoEmail(e.target.value)} />
                    <input type="password" value={campoPassword} className="login_input" 
                    placeholder="Ingrese su Contraseña" 
                    onChange={(e) => setCampoPassword(e.target.value)} />
                    <label className="checkbox-container">
                    <input
                    type="checkbox"
                    />
                    Acepto los términos y condiciones
                    </label>
                    <button id="btn_login" onClick={ValidateUserInfo}>Iniciar Sesión</button>
                    <button id="btn_register" onClick={() => navigate("/register")}>Registrate ahora</button>
                    <p className="forgot-password">
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                    </p>
                </div> 
        </div>
    )

}
    
export default Login