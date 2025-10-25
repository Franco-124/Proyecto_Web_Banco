

import { usuario } from "../Accounts/Accounts.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DebtsHistory from "./debts_history.jsx"
import IncomesHistory from "./income_history.jsx"
import ExpensesHistory from "./expeneses_history.jsx"
import "./Reports.css";

function Reports() {
  const [view, setView] = useState("debts");
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
    return (
        <div id="reports">
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
            <div className="reports-box">
                <h1>Gestión de Reportes</h1>
                
                <div className="reports-content">
                    <div className="reports-menu">
                        <button onClick={() => setView("incomes")}>Historial de Ingresos</button>
                        <button onClick={() => setView("expenses")}>Historial de Egresos</button>
                        <button onClick={() => setView("debts")}>Deudas Activas</button>
                    </div>

                    <div className="reports-view">
                      {view === "debts" && <DebtsHistory />}
                      {view === "incomes" && <IncomesHistory />}
                      {view === "expenses" && <ExpensesHistory />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;