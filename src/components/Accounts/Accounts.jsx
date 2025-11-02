import "./accounts.css";
import { useNavigate } from "react-router";
import {useState, useEffect} from "react";  
import {useLocation} from "react-router";
import {toast} from "react-toastify";

function Accounts(){

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});
    const location = useLocation();
    //const [transacciones, setTransacciones] = useState([]);

    const Inicio = () => navigate("/dashboard", { 
        state: { 
            nombre_usuario: usuario.nombre,
            id_usuario: id_usuario
        } 
    });
    const Salir = () => navigate("/");
    const Transaction = () => navigate("/transactions", { 
        state: { 
            nombre_usuario: usuario.nombre,
            id_usuario: id_usuario
        } 
    });
    const Profile = () => navigate("/accounts", { 
        state: { 
            nombre_usuario: usuario.nombre,
            id_usuario: id_usuario
        } 
    });
    const Loans = () => navigate("/loans", { 
        state: { 
            nombre_usuario: usuario.nombre,
            id_usuario: id_usuario
        } 
    });
    const Reports = () => navigate("/reports", { 
        state: { 
            nombre_usuario: usuario.nombre,
            id_usuario: id_usuario
        } 
    });

    const id_usuario = location.state?.id_usuario;
    console.log("ID Usuario en Accounts.jsx:", id_usuario);

    useEffect(() => {
        const ObtenerUsuario = (id) => {
            const base_url = "http://127.0.0.1:3000";
            const endpoint = `${base_url}/usuarios/${id}`;
            console.log("Endpoint para obtener usuario:", endpoint);

            fetch(endpoint, {
                method: "GET",
                headers: {
                "Content-Type": "application/json"
                }
            })
                .then(response => {
                if (!response.ok) {
                    toast.error("Error al obtener la información del usuario.");
                    throw new Error("Error al obtener usuario");
                }
                return response.json(); 
                })
                .then(data => {
                console.log("Datos del usuario obtenidos:", data);
                setUsuario(data.response[0]);
                })
                .catch(error => {
                console.error("Error al obtener el usuario:", error);
                toast.error("Ocurrió un error al obtener la información del usuario.");
                });
            };

            if (id_usuario) {
            ObtenerUsuario(id_usuario);
            } else {
            toast.error("Error al tratar de recuperar la información del usuario.");
            setUsuario({
                id: "",
                nombre: "",
                email: "",
                contraseña: "",
                numero_cuenta: "",
                tipo: "",
                saldo: "",
            });
            }
    }, [id_usuario]);
    
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
                    <p><strong>Número de Cuenta:</strong> {usuario.numero_cuenta}</p>
                    <p><strong>Tipo:</strong> {usuario.tipo}</p>
                    </div>
                </div>

                <div className="saldo-actual">
                    <h2>Saldo Actual</h2>
                    <p className="saldo-monto">${usuario.saldo}</p>
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