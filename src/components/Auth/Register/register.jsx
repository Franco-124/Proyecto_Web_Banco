import { useNavigate } from "react-router"
import {useState} from "react"
import './register.css'

function Register() {
    const navigate = useNavigate()
    const [campoName, setCampoName] = useState("")
    const [campoEmail, setCampoEmail] = useState("")
    const [campoPassword, setCampoPassword] = useState("")
    const [campoConfirmPassword, setCampoConfirmPassword] = useState("")
    const [campoPhone, setCampoPhone] = useState("")
    const [numeroCuenta, setNumeroCuenta] = useState("")

    const ValideUserRegistration = () => {
        if (campoName.trim() === "" || campoEmail.trim() === "" || campoPassword.trim() === "" ||
        campoConfirmPassword.trim() === "" || campoPhone.trim() === "" || numeroCuenta.trim() === "") {
            alert("Por favor, complete todos los campos.")
            return
        }
        if (campoPassword !== campoConfirmPassword) {
            alert("Las contraseñas no coinciden.")
            return
        }

        const newUser = {
            name: campoName,
            email: campoEmail,
            password: campoPassword,
            phone: campoPhone,
            accountNumber: numeroCuenta
        }
        alert("Registro exitoso. Ahora puede iniciar sesión.")
        navigate("/" , {state: newUser})
    }
    return (
        <div id="auth-container">
            <div id="register-container">
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
                <input type="text" value={campoPhone} className="register_input"
                placeholder="Ingrese su Teléfono"
                onChange={(e) => setCampoPhone(e.target.value)} />
                <input type="text" value={numeroCuenta} className="register_input"
                placeholder="Ingrese su Número de Cuenta"
                onChange={(e) => setNumeroCuenta(e.target.value)} />
                <button id="btn_register" onClick={ValideUserRegistration}>Registrarse</button>
                <button id="btn_login" onClick={() => navigate("/")}>Volver al Inicio de Sesión</button>
                </div>
            </div>
        </div>
    )
}


export default Register;