


import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import DebtsHistory from "./debts_history.jsx"
import IncomesHistory from "./income_history.jsx"
import ExpensesHistory from "./expeneses_history.jsx"
import "./Reports.css";

function Reports() {
  const [view, setView] = useState("debts");
  const navigate = useNavigate();
  const location = useLocation();

  const Inicio = () => {
    navigate("/dashboard", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    }); 
  };
  const Salir = () => {
    navigate("/"); 
  };
  const Transaction = () => {
    navigate("/transactions", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    }); 
  };
  const Profile = () => {
    navigate("/accounts", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    }); 
  };
  const Loans = () => {
    navigate("/loans", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    }); 
  };
  const Reports = () => {
    navigate("/reports", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    }); 
  };
    return (
        <div id="reports">
            <header className="header">
                <nav className="menu">
                    <ul>
                    <li><button onClick={Inicio}>{location.state?.nombre_usuario}</button></li>
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