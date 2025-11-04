import Deposit from "./Deposit.jsx";
import Withdraw from "./Withdraw.jsx";
import Transfer from "./Transfer.jsx";
import TransactionsHistory from "./TransactionsHistory.jsx";
import "./Transactions.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

function Transactions() {
  const [view, setView] = useState("deposit");

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
    <div className="transactions-box">
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
