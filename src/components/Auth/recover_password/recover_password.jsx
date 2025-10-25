
import "./recover_password.css";
import { useNavigate } from "react-router"

function RecoverPassword() {
    const navigate = useNavigate()
    return (
        <div className="recover-container">
            <div className="recover-box">
                <h1>Recuperar contraseña</h1>
                <p>Ingrese tu dirección de correo electrónico</p>
                <input type="email" className="recover-input" placeholder="Ingrese su Email"/>
                <input type="text" className="recover-input" placeholder="Ingrese su Número de Teléfono"/>
                <button className="recover-button">Enviar</button>
                <button className="recover-button" onClick={()=> {
                    navigate("/")
                }}>Volver</button>
                <p>
                    <strong>Nota:</strong> Recibira un correo electronico con indicaciones para cambiar su contraseña
                </p>
                </div>
        </div>
    )
}
export default RecoverPassword;