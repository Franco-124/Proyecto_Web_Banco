import Deposit from "./Deposit.jsx";
import Withdraw from "./Withdraw.jsx";
import Transfer from "./Transfer.jsx";
import TransactionsHistory from "./TransactionsHistory.jsx";
import "./Transactions.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuario } from "../Accounts/Accounts.jsx";

function Transactions() {
  const [view, setView] = useState("deposit");

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
    <div className="transactions-box">
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
  );
}

export default Transactions;
