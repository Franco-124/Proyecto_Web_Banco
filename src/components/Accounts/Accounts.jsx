import "./accounts.css";
import { useNavigate } from "react-router";
import {useState, useEffect} from "react";  
import {useUser} from "../../hooks/useUser";
import {toast} from "react-toastify";

function Accounts(){

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});
    const user = useUser();
    const [transacciones, setTransacciones] = useState([]);

    const Inicio = () => navigate("/dashboard");
    const Salir = () => navigate("/");
    const Transaction = () => navigate("/transactions");
    const Profile = () => navigate("/accounts");
    const Loans = () => navigate("/loans");
    const Reports = () => navigate("/reports");

    const id_usuario = user?.id_usuario;
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
    

    useEffect(() => {
        const ObtenerTransacciones = (id) => {
            const base_url = "http://127.0.0.1:3000";
            const endpoint = `${base_url}/transacciones/${id}`;

            fetch(endpoint, {
                method: 'GET',
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    toast.error("Error al obtener la información del usuario.");
                }
                return response.json()
            })
            .then(data => {
                console.log("Transacciones obtenidas exitosamente")
                setTransacciones(data.response)

            }).catch(error => {
                console.log("Error obteniendo transacciones de usuario")
                toast.error("Error tratando de obtener las transacciones del usuario")
            })

        }

        if (id_usuario){
            ObtenerTransacciones(id_usuario);
        }else{
            toast.error("Error al tratar de obtener las transacciones del usuario")
            setTransacciones( {
            id: "",
            cuenta_id: "",
            tipo: "",
            monto: "",
            fecha: ""
            })
        }

    }, [id_usuario]);
    
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
                        </tr>
                        </thead>
                        <tbody>
                        {transacciones.map((t, index) => (
                            <tr key={index}>
                            <td>{new Date(t.fecha).toLocaleDateString()}</td>
                            <td>{t.tipo}</td>
                            <td>${t.monto}</td>
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