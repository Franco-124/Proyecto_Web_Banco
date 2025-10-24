
import { useNavigate } from "react-router"
import {useState} from "react"
import { useLocation } from "react-router";
import './login.css'

function Login() {

    const navigate = useNavigate()
    const location = useLocation();

    const MockUser = location.state || {
        email: "Johan",
        password: "12345"
    }
    
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")

    const ValidateUserInfo = () => {
        if (campoEmail.trim() === "" || campoPassword.trim() === "") {
            alert("Por favor, complete todos los campos.")
            return
        }
        if (campoEmail === MockUser.email && campoPassword == MockUser.password) {
            alert("Inicio de sesión exitoso")
            navigate("/dashboard")
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }

    return (
        <div id="auth-container">
            <div id="login-container">
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
                    <a onClick={() => {
                        navigate("/recover-password")
                    }}>¿Olvidaste tu contraseña?</a>
                    </p>
                </div> 
            </div>
        </div>
    )

}
    
export default Login