import Deposit from "./Deposit.jsx";
import Withdraw from "./Withdraw.jsx";
import Transfer from "./Transfer.jsx";
import TransactionsHistory from "./TransactionsHistory.jsx";
import "./Transactions.css";
import { useState } from "react";

function Transactions() {
  const [view, setView] = useState("history");

  return (
    <div id="transactions-container">
      <div className="transactions-box">
        <h1>Gestión de Transacciones</h1>

        <div className="transactions-content">
          <div className="transactions-menu">
            <button onClick={() => setView("deposit")}>Depositar</button>
            <button onClick={() => setView("withdraw")}>Retirar</button>
            <button onClick={() => setView("transfer")}>Transferir</button>
            <button onClick={() => setView("history")}>Historial</button>
          </div>

          <div className="transactions-view">
            {view === "deposit" && <Deposit />}
            {view === "withdraw" && <Withdraw />}
            {view === "transfer" && <Transfer />}
            {view === "history" && <TransactionsHistory />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
