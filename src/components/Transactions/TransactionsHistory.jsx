import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

function TransactionsHistory() {

    const location = useLocation();
    const [transacciones, setTransacciones] = useState([])
    const id_usuario = location.state?.id_usuario;

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
        <div className="transactions-history">
                <h2>Transacciones Recientes</h2>
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

    )
}

export default TransactionsHistory;