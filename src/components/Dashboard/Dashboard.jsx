
import "./Dashboard.css";
import {useState} from "react"
import { useNavigate } from "react-router";
import { useLocation } from "react-router"; 
import { useEffect } from "react";
import {toast} from "react-toastify";

function Dashboard() {

    const [mostrarSaldo, setMostrarSaldo] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [transacciones, setTransacciones] = useState([])

    const id_usuario = location.state?.id_usuario;
    const saldo = location.state?.saldo;


    const Inicio = () => navigate("/dashboard", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    });

    const Salir = () => navigate("/");
    
    const Transaction = () => navigate("/transactions", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    });
    
    const Profile = () => {
        navigate("/accounts", { state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
        }); 
    };
    
    const Loans = () => navigate("/loans", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    });
    const Reports = () => navigate("/reports", { 
        state: { 
            nombre_usuario: location.state?.nombre_usuario,
            id_usuario: location.state?.id_usuario,
            saldo: location.state?.saldo
        } 
    });


    const OcultarSaldo = () => {
        setMostrarSaldo(!mostrarSaldo);
    };


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
                console.log(data.response)
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
      <div className="dashboard-root">
          <div className="dashboard">
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
              <div className="Bienvenida">
                  <h1>{location.state?.nombre_usuario}, bienvenido(a) a la Sucursal Virtual de Estebanquito.</h1>
                  <h3>Esperamos que tu estadia en nuestro banco te de seguridad y accesibilidad
                      para manejar tus finanzas de la mejor manera posible.
                  </h3>
              </div>
                  <div id="Saldos" className="Saldos">
                      <h2>Saldo disponible:{" "}
                      {mostrarSaldo ? `$${saldo}` : "•••••••"}</h2>
                      <button onClick={OcultarSaldo}>
                      {mostrarSaldo ? "Ocultar saldo" : "Mostrar saldo"}
                      </button>

                  </div>
                  <div id="Transacciones" className="Transacciones">
                      <h2>Ultimas transacciones: </h2>
                <div className="accounts-transactions-history">
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
                      <button onClick={Transaction}>Realizar movimiento</button>

                  </div>
                  <div id="Solicitudes" className="Solicitudes">
                      <h2>Solicitudes de prestamos: </h2>
                      <h4>Aca podras ver el estado de tu ultima solicitud</h4>
                      <h4>Revisa bien el estado de la solicitud: (Aprobada, pendiente, reprobado)</h4>
                      <button onClick={Loans}>Ver todas las solicitudes</button>

                  </div>
                  <div id="Reportes" className="Reportes">
                      <h2>Reportes financieros:</h2>
                      <h4>Haz click en el boton para ver todos los reportes</h4>
                      <button onClick={Reports}>Ver todos los reportes</button>
                  </div>
          </div>
        </div>
    )

}
export default Dashboard;