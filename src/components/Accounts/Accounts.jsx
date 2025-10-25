import "./accounts.css";
import { useNavigate } from "react-router-dom";
export const usuario = {
    nombre: "Johan Steven",
    numeroCuenta: "1023456789",
    tipoCuenta: "Ahorros",
    saldo: 4500000,
};

function Accounts(){

    
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
     const transacciones = [
        { fecha: "2025-10-16", tipo: "Depósito", monto: 500000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-10-10", tipo: "Retiro", monto: 200000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-09-29", tipo: "Transferencia", monto: 1000000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-09-15", tipo: "Depósito", monto: 750000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-09-05", tipo: "Retiro", monto: 300000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-08-28", tipo: "Transferencia", monto: 450000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-08-15", tipo: "Depósito", monto: 600000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-08-01", tipo: "Retiro", monto: 150000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-07-20", tipo: "Transferencia", monto: 800000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-07-10", tipo: "Depósito", monto: 400000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-06-30", tipo: "Retiro", monto: 250000, metodo: "Cajero", cuenta: "Corriente" },
    ];

    return (
        
        <div id="accounts-container">
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
            <h1>Información de Cuenta</h1>
            <div className="cards-container">
                <div className="account-card">
                    <div className="account-info">
                    <p><strong>Nombre de usuario:</strong></p>
                    <p>{usuario.nombre}</p>
                    <p><strong>Número de Cuenta:</strong> {usuario.numeroCuenta}</p>
                    <p><strong>Tipo:</strong> {usuario.tipoCuenta}</p>
                    </div>
                </div>

                <div className="saldo-actual">
                    <h2>Saldo Actual</h2>
                    <p className="saldo-monto">${usuario.saldo.toLocaleString()}</p>
                </div>
            </div>
            <div className="accounts-transactions-history">
                <h2>Transacciones Recientes</h2>
                <div className="transactions-table-container">
                    <table className="transactions-table">
                        <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tipo</th>
                            <th>Monto</th>
                            <th>Método</th>
                            <th>Cuenta</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transacciones.map((t, index) => (
                            <tr key={index}>
                            <td>{t.fecha}</td>
                            <td>{t.tipo}</td>
                            <td>${t.monto.toLocaleString()}</td>
                            <td>{t.metodo}</td>
                            <td>{t.cuenta}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Accounts;