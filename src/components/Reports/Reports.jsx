

import { usuario } from "../Accounts/Accounts.jsx";
import { useNavigate } from "react-router-dom";
function Reports() {

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
        <div id="reports">
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
            <h1>Bienvenido a tus reportes</h1>
            <p>Aquí podrás ver tus reportes financieros.</p>
        </div>
    )
}

export default Reports;