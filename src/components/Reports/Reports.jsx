
import { useNavigate} from "react-router";
import { useState } from "react";
import DebtsHistory from "./debts_history.jsx"
import IncomesHistory from "./income_history.jsx"
import ExpensesHistory from "./expenses_history.jsx"
import {useUser} from "../../hooks/useUser";
import "./Reports.css";

function Reports() {
  const [view, setView] = useState("debts");
  const navigate = useNavigate();
  const user = useUser();

  const Inicio = () => {
    navigate("/dashboard"); 
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
    navigate("/reports"); 
  };

    return (
        <div id="reports">
            <header className="header">
                <nav className="menu">
                    <ul>
                    <li><button onClick={Inicio}>{user?.nombre_usuario}</button></li>
                    <li><button onClick={Profile}>Perfil</button></li>
                    <li><button onClick={Loans}>Prestamos</button></li>
                    <li><button onClick={Transaction}>Transacciones</button></li>
                    <li><button onClick={Reports}>Reportes</button></li> 
                    <li><button onClick={Salir}>Salir</button></li>
                    </ul>
                </nav>
            </header>
            <div className="reports-box">
                <h1>Gestión de Reportes</h1>
                
                <div className="reports-content">
                    <div className="reports-menu">
                        <button onClick={() => setView("incomes")}>Historial de Ingresos</button>
                        <button onClick={() => setView("expenses")}>Historial de Egresos</button>
                        <button onClick={() => setView("debts")}>Deudas Activas</button>
                    </div>

                    <div className="reports-view">
                      {view === "debts" && <DebtsHistory usuario_id={user?.id_usuario} nombre_usuario={user?.nombre_usuario} />}
                      {view === "incomes" && <IncomesHistory usuario_id={user?.id_usuario} />}
                      {view === "expenses" && <ExpensesHistory usuario_id={user?.id_usuario} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;