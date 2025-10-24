
import '../Dashboard/Dashboard.css'
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const handleSalir = () => {
    navigate("/login"); 
  };

    return (
        
        <div className="dashboard">
                <header>
                <nav className="menu">
                    <ul>
                    <li><a href="#">Usuario aqui</a></li>
                    <li><a href="#Saldos">Saldos</a></li>
                    <li><a href="#Transacciones">Transacciones</a></li>
                    <li><a href="#Solicitudes">Solicitudes</a></li>
                    <li><a href="#Reportes">Reportes Financieros</a></li>
                    <li><button onClick={handleSalir}>Salir</button></li>
                    </ul>
                </nav>
             </header>
            <div className="Bienvenida">
                <h1>Bienvenido (nombre Usuario) a la sucursar virtual de Estebanquito</h1>
                <h3>Esperamos que tu estadia en nuestro te banco te de seguridad y accesibilidad
                    para manejar tus finanzas de la mejor manera posible.
                </h3>
            </div>

                 <div id="Saldos" className="Saldos">
                    <h2>Saldo disponible: </h2>

                </div>
                <div id="Transacciones" className="Transacciones">
                    <h2>Ultimas transacciones: </h2>
                    <button>Todas las Transacciones</button>

                </div>
                <div id="Solicitudes" className="Solicitudes">
                    <h2>Solicitudes de prestamos: 
                        <h4>Estado de solicitud: (Aprobada y monto aprobado, o reprobado y porque)</h4>
                    </h2>

                </div>
                <div id="Reportes" className="Reportes">
                    <h2>Reportes financieros:</h2>

                </div>
        </div>
    )

}
export default Dashboard;