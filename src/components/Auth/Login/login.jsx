
import { useNavigate } from "react-router"
import {useState} from "react"
import './login.css'
import { Link } from "react-router";

function Login() {

    const navigate = useNavigate()
    
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")
    const [checkBox, setCheckBox] = useState(false) 

    const ValidateUserInfo = (e) => {
        e.preventDefault() // Prevenir el comportamiento por defecto del formulario
        
        if (!checkBox) {
            alert("Debe aceptar los términos y condiciones")
            return
        }

        if (campoEmail === "" || campoPassword === "") {
            alert("Por favor complete todos los campos")
            return
        }

        const base_url = "http://127.0.0.1:3000"
        const endpoint = base_url + '/auth/login_usuario'
        console.log("Endpoint: ", endpoint)
        console.log("Datos enviados: ", { email: campoEmail, password: campoPassword })
        
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: campoEmail,
                contraseña: campoPassword
            })
        })
        .then(response => {
            console.log("Status de respuesta:", response.status)
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || `Error ${response.status}: ${response.statusText}`)
                })
            }
            return response.json()
        })
        .then(data => { 
            console.log("Respuesta del servidor:", data)
            if (data.success) {
                alert("Inicio de sesión exitoso")
                navigate("/dashboard", {state: {nombre_usuario: data.nombre_usuario}})
            } else {
                alert("Error en el inicio de sesión: " + data.message)
            }
        })
        .catch(error => {
            console.error('Error completo:', error);
            alert("Error: " + error.message)
        });
     
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
                    onClick={() => setCheckBox(!checkBox)}/>
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