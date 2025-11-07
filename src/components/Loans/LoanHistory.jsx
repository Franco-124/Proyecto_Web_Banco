import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


function LoansHistory({ usuario_id }) {

    const [loans_history, setLoansHistory] = useState([])

    useEffect(() => {
        const ObtenerHistorialPrestamos = (id) => {
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
                setLoansHistory(data.response)

            }).catch(error => {
                console.log("Error obteniendo el historial de prestamos del usuario", error)
                toast.error("Error tratando de obtener el historial de prestamos del usuario")
            });

        }

        if (usuario_id){
            ObtenerHistorialPrestamos(usuario_id);
        }else{
            toast.error("Error al tratar de obtener el historial de prestamos del usuario")
            setLoansHistory([])
        }

    }, [usuario_id]);

    
    return (
        <div className="loans-history-box">
            <h1>Historial de Préstamos</h1>
            <div className="loans-list">
                {loans_history.map((loan, index) => (
                <div className="loan-card" key={loan.id ? `${loan.id}-${index}` : index}>
                    <div className="loan-header">
                    <span className={`loan-status ${loan.estado}`}>{loan.estado}</span>
                    <span className="loan-date">📅 {new Date(loan.fecha_solicitud).toLocaleDateString()}</span>
                    </div>
                    <div className="loan-body">
                    <p><strong>Monto:</strong> ${parseFloat(loan.monto).toLocaleString()}</p>
                    <p><strong>Plazo:</strong> {loan.plazo} {loan.plazo === 1 ? 'mes' : 'meses'}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default LoansHistory;