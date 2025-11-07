
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function CurrentUserDebt({ usuario_id , nombre_usuario}) {

  const [userDebt, setLoansHistory] = useState([])
  const filered_loans = userDebt.filter(loan => loan.estado == 'aprobado');

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
    <div className="debt-list">
      <h2>Deudas de {nombre_usuario}</h2>
      <div className="debt-cards">
        {filered_loans.map((deuda, index) => (
          <div className={`debt-card ${deuda.estado}`} key={`${deuda.id}-${index}`}>
            <div className="debt-header">
              <h3>Préstamo #{deuda.id}</h3>
              <span className={`loan-status ${deuda.estado}`}>
                {deuda.estado}
              </span>
            </div>

            <div className="debt-body">
              <p><strong>Fecha:</strong> {new Date(deuda.fecha_solicitud).toLocaleDateString('en-US')}</p>
              <p><strong>Plazo:</strong> {deuda.plazo} meses</p>
              <p><strong>Monto:</strong> ${deuda.monto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentUserDebt;
