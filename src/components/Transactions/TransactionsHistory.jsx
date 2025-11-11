import { useState } from "react";
import { useEffect } from "react";
import {toast} from "react-toastify";

function TransactionsHistory({usuario_id}) {

    const [transacciones, setTransacciones] = useState([])

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

        if (usuario_id){
            ObtenerTransacciones(usuario_id);
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

    }, [usuario_id]);

   
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