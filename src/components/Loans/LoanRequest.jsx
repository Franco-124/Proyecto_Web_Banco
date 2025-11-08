import { useState } from "react";
import {toast} from "react-toastify";

function LoanRequest({ usuario_id }) {

    const [deadline, setDeadline] = useState("");
    const [amount, setAmount] = useState("");

    const RegisterLoan = () => {

        const base_url = "http://127.0.0.1:3000";
        const endpoint = `${base_url}/prestamos/solicitar/${usuario_id}`;

        const data = {
            monto: amount,
            plazo: deadline,
            estado: "aprobado"
        }

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data.success){
                toast.error("Error al solicitar el prestamo, Intente mas tarde o contacte con soporte.");
            }
            else{
                toast.success("Prestamo solicitado con exito ✅");
            }
        })
        .catch(error => {
            console.log(error);
            toast.error("Error al solicitar el prestamo, Intente mas tarde o contacte con soporte.");
        });
    }

    return  (
        <div className="loan-form">
            <h1>Solicitud de Prestamo</h1>
            <input type="number" 
                placeholder="Ingrese el monto del prestamo"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/> 
            <select id="plazo-meses" 
                name="plazo-meses" 
                placeholder="Plazo en meses" 
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            >
                <option value="" disabled>Selecciona un plazo en meses</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
                <option value="48">48 meses</option>
            </select>
            <button onClick={RegisterLoan}>Solicitar Prestamo</button>
        </div>
    )
}

export default LoanRequest;