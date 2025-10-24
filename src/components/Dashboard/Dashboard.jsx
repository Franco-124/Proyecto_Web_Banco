
import '../Dashboard/Dashboard.css'
function Dashboard() {

    return (
        
        <div className="dashboard">
            <div className="Bienvenida">
                <h1>Bienvenido a la sucursar virtual de Estebanquito</h1>
            </div>
            <header>
                <nav className="menu">
                    <ul>
                    <li><a href="">Saldos</a></li>
                    <li><a href="#Saldos">Saldos</a></li>
                    <li><a href="#Transacciones">Transacciones</a></li>
                    <li><a href="#Solicitudes">Solicitudes</a></li>
                    <li><a href="#Reportes">Reportes Financieros</a></li>
                    <li><a href="#">Cerrar sesion</a></li>
                    </ul>
                </nav>
             </header>
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