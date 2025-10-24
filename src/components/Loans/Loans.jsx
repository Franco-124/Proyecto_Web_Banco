import LoansApply from "./LoanRequest";
import LoansHistory from "./LoanHistory";
import CurrentUserDebt from "./CurrentDebt";
import { useState } from "react";
import "./Loans.css";

function Loans() {
  const [view, setView] = useState("loans-apply");

  return (
    <div className="loans-box">
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