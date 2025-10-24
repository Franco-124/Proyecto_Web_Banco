
import LoansApply from "./LoanRequest";
import LoansHistory from "./LoanHistory";
import CurrentUserDebt from "./CurrentDebt";
import { useState } from "react";
import { usuario } from "../Accounts/Accounts.jsx";
import { useNavigate } from "react-router-dom";
import "./Loans.css";

function Loans() {
  const [view, setView] = useState("loans-apply");

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
    <div className="loans-box">
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
      <h1>Gestión de Prestamos</h1>

      <div className="loans-content">
        <div className="loans-menu">
          <button onClick={() => setView("loans-apply")} className="request-loan">Solicitar Prestamo</button>
          <button onClick={() => setView("loans-history")}>Historial de prestamos</button>
          <button onClick={() => setView("current-debt")}>Deuda Actual</button>
        </div>

        <div className="loans-view">
          {view === "loans-apply" && <LoansApply />}
          {view === "loans-history" && <LoansHistory />}
          {view === "current-debt" && <CurrentUserDebt />}
        </div>
      </div>
    </div>
  );
}

export default Loans;
