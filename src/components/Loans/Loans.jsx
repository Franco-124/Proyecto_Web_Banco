
import LoansApply from "./LoanRequest";
import LoansHistory from "./LoanHistory";
import CurrentUserDebt from "./CurrentDebt";
import { useState } from "react";
import { useNavigate} from "react-router";
import {useUser} from "../../hooks/useUser";
import "./Loans.css";

function Loans() {
  const [view, setView] = useState("loans-history");
  const user = useUser();
  const navigate = useNavigate();

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
  const Loan = () => {
    navigate("/loans"); 
  };
  const Reports = () => {
    navigate("/reports"); 
  };

  return (
    <div className="loans-box">
        <header className="header">
          <nav className="menu">
              <ul>
              <li><button onClick={Inicio}>{user?.nombre_usuario}</button></li>
              <li><button onClick={Profile}>Perfil</button></li>
              <li><button onClick={Loan}>Prestamos</button></li>
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
          {view === "loans-apply" && <LoansApply usuario_id={user?.id_usuario}/>}
          {view === "loans-history" && <LoansHistory usuario_id={user?.id_usuario}/>}
          {view === "current-debt" && <CurrentUserDebt usuario_id={user?.id_usuario} nombre_usuario = {user?.nombre_usuario}/>}
        </div>
      </div>
    </div>
);
}

export default Loans;
