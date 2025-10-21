
import LoansApply from "./LoanRequest";
import LoansHistory from "./LoanHistory";
import { useState } from "react";
import "./Loans.css";
function Loans() {
  const [view, setView] = useState("loans-apply");

  return (
    <div className="loans-box">
      <h1>Gestión de Prestamos</h1>

      <div className="loans-content">
        <div className="loans-menu">
          <button onClick={() => setView("loans-apply")}>Solicitar Prestamo</button>
          <button onClick={() => setView("loans-history")}>Detalles de prestamos</button>
        </div>

        <div className="loans-view">
          {view === "loans-apply" && <LoansApply />}
          {view === "loans-history" && <LoansHistory />}
        </div>
      </div>
    </div>
  );
}

export default Loans;
