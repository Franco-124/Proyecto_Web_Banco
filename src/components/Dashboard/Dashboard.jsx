
import '../Dashboard/Dashboard.css'
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const Salir = () => {
    navigate("/login"); 
  };
    const Transaction = () => {
    navigate("/transactions"); 
  };
    const Profile = () => {
    navigate("/accounts"); 
  };
    const Loans = () => {
    navigate("/loans"); 
  };

    return (
        
        <div className="dashboard">
                <header className="header">
                <nav className="menu">
                    <ul>
                    <li><button onClick={Profile}>Perfil</button></li>
                    <li><button onClick={Loans}>Prestamos</button></li>
                    <li><button onClick={Transaction}>Transacciones</button></li>
                    {/* <li><button onClick={Reports}>Reportes</button></li> */}
                    <li><button onClick={Salir}>Salir</button></li>
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
                    <button>Ocultar saldo</button>

                </div>
                <div id="Transacciones" className="Transacciones">
                    <h2>Ultimas transacciones: </h2>
                    <button>Ver todas las Transacciones</button>

                </div>
                <div id="Solicitudes" className="Solicitudes">
                    <h2>Solicitudes de prestamos: </h2>
                    <h4>Estado de solicitud: (Aprobada y monto aprobado, o reprobado y porque)</h4>

                    <button className="Solicitud">Ver todas las solicitudes</button>

                </div>
                <div id="Reportes" className="Reportes">
                    <h2>Reportes financieros:</h2>
                    <button>Ver todos los reportes</button>

                </div>
        </div>
    )

}
export default Dashboard;