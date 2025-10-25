
import "./Dashboard.css";
import {useState} from "react"
import { usuario } from "../Accounts/Accounts.jsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
    const Inicio = () => {
    navigate("/Dashboard"); 
  };
  const Salir = () => {
    navigate("/"); 
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
    const Reports = () => {
    navigate("/Reports"); 
  };

  const [mostrarSaldo, setMostrarSaldo] = useState(true);
  const OcultarSaldo = () => {
    setMostrarSaldo(!mostrarSaldo);
  };
       const transacciones = [
        { fecha: "2025-10-16", tipo: "Depósito", monto: 500000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-10-10", tipo: "Retiro", monto: 200000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-09-29", tipo: "Transferencia", monto: 1000000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-09-15", tipo: "Depósito", monto: 750000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-09-05", tipo: "Retiro", monto: 300000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-08-28", tipo: "Transferencia", monto: 450000, metodo: "Sucursal", cuenta: "Nomina" }
       ];
    return (
      <div className="dashboard-root">
          <div className="dashboard">
                  <header className="header">
                  <nav className="menu">
                      <ul>
                      <li><button onClick={Inicio}>{usuario.nombre}</button></li>
                      <li><button onClick={Profile}>Perfil</button></li>
                      <li><button onClick={Loans}>Prestamos</button></li>
                      <li><button onClick={Transaction}>Transacciones</button></li>
                      <li><button onClick={Reports}>Reportes</button></li> 
                      <li><button onClick={Salir}>Salir</button></li>
                      </ul>
                  </nav>
              </header>
              <div className="Bienvenida">
                  <h1>Bienvenido {usuario.nombre} a la sucursar virtual de Estebanquito</h1>
                  <h3>Esperamos que tu estadia en nuestro te banco te de seguridad y accesibilidad
                      para manejar tus finanzas de la mejor manera posible.
                  </h3>
              </div>
                  <div id="Saldos" className="Saldos">
                      <h2>Saldo disponible:{" "}
                      {mostrarSaldo ? `$${usuario.saldo.toLocaleString()}` : "•••••••"}</h2>
                      <button onClick={OcultarSaldo}>
                      {mostrarSaldo ? "Ocultar saldo" : "Mostrar saldo"}
                      </button>

                  </div>
                  <div id="Transacciones" className="Transacciones">
                      <h2>Ultimas transacciones: </h2>
                <div className="accounts-transactions-history">
                <div className="transactions-table-container">
                    <table className="transactions-table">
                        <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tipo</th>
                            <th>Monto</th>
                            <th>Método</th>
                            <th>Cuenta</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transacciones.map((t, index) => (
                            <tr key={index}>
                            <td>{t.fecha}</td>
                            <td>{t.tipo}</td>
                            <td>${t.monto.toLocaleString()}</td>
                            <td>{t.metodo}</td>
                            <td>{t.cuenta}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
                      <button onClick={Transaction}>Realizar movimiento</button>

                  </div>
                  <div id="Solicitudes" className="Solicitudes">
                      <h2>Solicitudes de prestamos: </h2>
                      <h4>Aca podras ver el estado de tu ultima solicitud</h4>
                      <h4>Revisa bien el estado de la solicitud: (Aprobada, pendiente, reprobado)</h4>
                      <button onClick={Loans}>Ver todas las solicitudes</button>

                  </div>
                  <div id="Reportes" className="Reportes">
                      <h2>Reportes financieros:</h2>
                      <h4>Haz click en el boton para ver todos los reportes</h4>
                      <button onClick={Reports}>Ver todos los reportes</button>
                  </div>
          </div>
        </div>
    )

}
export default Dashboard;