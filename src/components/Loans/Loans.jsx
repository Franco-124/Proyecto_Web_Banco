
import LoansApply from "./LoanRequest";
import LoansHistory from "./LoanHistory";
import CurrentUserDebt from "./CurrentDebt";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import "./Loans.css";


function Loans() {
  const [view, setView] = useState("loans-history");

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
    <div className="loans-box">
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
      <h1>Gestión de Prestamos</h1>

      <div className="loans-content">
        <div className="loans-menu">
          <button onClick={() => setView("loans-apply")} className="request-loan">Solicitar Prestamo</button>
          <button onClick={() => setView("loans-history")}>Historial de prestamos</button>
          <button onClick={() => setView("current-debt")}>Deuda Actual</button>
        </div>

        <div className="loans-view">
          {view === "loans-apply" && <LoansApply usuario_id={location.state?.id_usuario}/>}
          {view === "loans-history" && <LoansHistory usuario_id={location.state?.id_usuario}/>}
          {view === "current-debt" && <CurrentUserDebt usuario_id={location.state?.id_usuario} nombre_usuario = {location.state?.nombre_usuario}/>}
        </div>
      </div>
    </div>
  );
}

export default Loans;
