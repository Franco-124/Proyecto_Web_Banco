
import { useNavigate } from "react-router"
import {useState} from "react"
import './register.css'

function Register() {
    const navigate = useNavigate()
    const [campoName, setCampoName] = useState("")
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")
    const [campoConfirmPassword, setCampoConfirmPassword] = useState("")
    const [numeroCuenta, setNumeroCuenta] = useState("")
    const [tipoCuenta, setTipoCuenta] = useState("")
    
    const ValideUserRegistration = () => {
        if (campoName.trim() === "" || campoEmail.trim() === "" || campoPassword.trim() === "" ||
        campoConfirmPassword.trim() === "" || numeroCuenta.trim() === "" || tipoCuenta === "") {
            alert("Por favor, complete todos los campos.")
            return
        }
        if (campoPassword !== campoConfirmPassword) {
            alert("Las contraseñas no coinciden.")
            return
        }

        const base_url = "http://127.0.0.1:3000"
        const endpoint = base_url + '/auth/registrar_usuario'

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: campoName,
                email: campoEmail,
                contraseña: campoPassword,
                numero_cuenta: numeroCuenta,
                tipo: tipoCuenta,
                saldo: 0.0
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
                alert("Registro exitoso. Ahora puede iniciar sesión.")
                navigate("/")
            }
            else {
                alert("Error en el registro: " + data.message)
            }
        })
        .catch(error => {
            console.error("Error durante la solicitud de registro:", error)
            alert("Ocurrió un error durante el registro. Por favor, intente nuevamente más tarde.")
        });
    }

    return (
        <div id="auth-container">
            <div id="register-box">
            <h1>Registro de Usuario</h1>
            <input type="text" value={campoName} className="register_input"
            placeholder="Ingrese su Nombre"
            onChange={(e) => setCampoName(e.target.value)} />
            <input type="text" value={campoEmail} className="register_input"
            placeholder="Ingrese su E-mail"
            onChange={(e) => setCampoEmail(e.target.value)} />
            <input type="password" value={campoPassword} className="register_input"
            placeholder="Ingrese su Contraseña"
            onChange={(e) => setCampoPassword(e.target.value)} />
            <input type="password" value={campoConfirmPassword} className="register_input"
            placeholder="Confirme su Contraseña"
            onChange={(e) => setCampoConfirmPassword(e.target.value)} />
            <input type="text" value={numeroCuenta} className="register_input"
            placeholder="Ingrese su Número de Cuenta"
            onChange={(e) => setNumeroCuenta(e.target.value)} />
            <select value={tipoCuenta} className="register_input" onChange={(e) => setTipoCuenta(e.target.value)}>
                <option value="">Seleccione el tipo de cuenta</option>
                <option value="ahorros">Ahorros</option>
                <option value="corriente">Corriente</option>
            </select>
            <button id="btn_register" onClick={ValideUserRegistration}>Registrarse</button>
            <button id="btn_login" onClick={() => navigate("/")}>Volver al Inicio de Sesión</button>
            </div>
        </div>
    )
}


export default Register;