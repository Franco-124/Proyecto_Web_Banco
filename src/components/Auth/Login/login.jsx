
import { useNavigate } from "react-router"
import { toast } from 'react-toastify';
import {useState} from "react"
import './login.css'
import { Link } from "react-router";

function Login() {

    const navigate = useNavigate()
    
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")
    const [checkBox, setCheckBox] = useState(false) 

    const ValidateUserInfo = () => {
        if (!checkBox) {
            toast.error("Debe aceptar los términos y condiciones para continuar.");
            return;
        }

        if (campoEmail === "" || campoPassword === "") {
            toast.error("Por favor, complete todos los campos.");
            return;
        }

        const base_url = "http://127.0.0.1:3000";
        const endpoint = base_url + '/auth/login_usuario';

        console.log("Endpoint:", endpoint);
        console.log("Datos enviados:", { email: campoEmail, contraseña: campoPassword });

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
            console.log("Status de respuesta:", response.status);

            if (!response.ok) {
                return response.json().then(err => {
                    console.log("Error recibido del servidor:", err);

                    if (response.status === 401) {
                        toast.error("Credenciales inválidas. Por favor, verifique su correo y contraseña.");
                    } else if (response.status === 500) {
                        toast.error("Error del servidor. Por favor, intente nuevamente más tarde.");
                    } else {
                        toast.error(err.message || `Error ${response.status}: ${response.statusText}`);
                    }
                });
            }

            return response.json();
        })
        .then(data => {
            if (!data) return;
            console.log("Respuesta del servidor:", data);

            if (data.success) {
                toast.success("Inicio de sesión exitoso. Redirigiendo al panel...");
                navigate("/dashboard", { state: { 
                    nombre_usuario: data.nombre_usuario,
                    id_usuario: data.id
                } 
                });
            } else {
                toast.error("Error en el inicio de sesión: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error completo:", error);
            toast.error("Ocurrió un error durante el inicio de sesión. Por favor, intente nuevamente más tarde.");
        })
    };

        
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