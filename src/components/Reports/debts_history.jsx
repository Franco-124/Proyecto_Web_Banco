
import { act, useState } from "react";
import {toast} from "react-toastify";
import { useEffect } from "react";

function DebtsHistory({usuario_id, nombre_usuario}) {

  const [activeDebts, setActiveDebts] = useState([])

  useEffect(() => {
        const ObtenerDeudasActivas = (id) => {
            const base_url = "http://127.0.0.1:3000";
            const endpoint = `${base_url}/prestamos/${id}`;

            fetch(endpoint, {
                method: 'GET',
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    toast.error("Error al obtener la información del usuario.");
                    throw new Error("Error en la respuesta");
                }
                return response.json();
            })
            .then(data => {
                if (!data.success){
                    toast.error("Error al obtener el historial de prestamos del usuario")
                    return;
                }
                setActiveDebts(data.response)

            }).catch(error => {
                console.log("Error obteniendo el historial de prestamos del usuario", error)
                toast.error("Error tratando de obtener el historial de prestamos del usuario")
            });

        }

        if (usuario_id){
            ObtenerDeudasActivas(usuario_id);
        }else{
            toast.error("Error al tratar de obtener el historial de prestamos del usuario")
            setActiveDebts([])
        }

    }, [usuario_id]);

    const filtered_data = activeDebts.filter( d => d.estado.toLowerCase() == "aprobado" );

    
     return (
        <div className="debt-list">
        <h2>Deudas de {nombre_usuario}</h2>
        <div className="debt-cards">
            {filtered_data.map((deuda, index) => (
            <div className={`debt-card ${deuda.estado}`} key={`${deuda.id}-${index}`}>
                <div className="debt-header">
                <h3>Préstamo #{deuda.id}</h3>
                <span className={`loan-status ${deuda.estado}`}>
                    {deuda.estado}
                </span>
                </div>

                <div className="debt-body">
                <p><strong>Monto:</strong> ${deuda.monto}</p>
                <p><strong>Fecha Solicitud:</strong> ${new Date(deuda.fecha_solicitud).toLocaleDateString()}</p>
                <p><strong>Plazo</strong> {deuda.plazo} meses</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default DebtsHistory;