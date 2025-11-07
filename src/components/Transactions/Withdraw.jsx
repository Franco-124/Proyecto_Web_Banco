import { useState } from "react";
import { toast } from "react-toastify";

function Withdraw({usuario_id}) {
    const [tipoCuenta, setTipoCuenta] = useState('');
    const [cantidadDinero, setCantidadDinero] = useState('');
    const [metodoRetiro, setMetodoRetiro] = useState('');
    const [showCustomAmount, setShowCustomAmount] = useState(false);
    const [customAmount, setCustomAmount] = useState('');
        
    const handleAmountChange = (e) => {
        const value = e.target.value;
        setCantidadDinero(value);
        if (value === 'otro') {
            setShowCustomAmount(true);
        } else {
            setShowCustomAmount(false);
            setCustomAmount('');
        }
    };

    const WithdrawMoney = () => {
        let Cantidad = cantidadDinero;
        console.log("Usuario ID:", usuario_id);
        console.log("Cantidad a retirar:", Cantidad);
        if (cantidadDinero === 'otro') {
            Cantidad = customAmount;
        }

        const base_url = "http://127.0.0.1:3000";
        const endpoint = `${base_url}/transacciones/cuentas/retirar`;

        const data = {
            usuario_id: usuario_id,
            monto: Cantidad
        }

        console.log("Datos para el retiro:", data);

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response);
            if (!response.ok){
                toast.error("Error al realizar el retiro, Revise sus fondos o intente mas tarde.");
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            if (data.status_code === 400){
                toast.error(data.response);
            }else{
                toast.success("Retiro realizado con éxito.");
            }
        })
        .catch(error => {
            console.log(error);
            toast.error("Error al realizar el retiro, Revise sus fondos o intente mas tarde.");
        });
    }

    return (
        <div id="withdraw-container">
            <h2>Complete los campos para realizar el retiro</h2>
            <div id="withdraw-form">
                <select 
                    id="tipo-cuenta" 
                    name="tipo-cuenta"
                    value={tipoCuenta}
                    onChange={(e) => setTipoCuenta(e.target.value)}
                >
                <option value="" disabled>Selecciona un tipo de cuenta</option>
                <option value="ahorros">Cuenta de Ahorros</option>
                <option value="corriente">Cuenta Corriente</option>
                </select>
                <select 
                    id="cantidad-dinero" 
                    name="cantidad-dinero" 
                    placeholder="Cantidad a retirar"
                    value={cantidadDinero}
                    onChange={handleAmountChange}
                >
                <option value="" disabled>Selecciona una cantidad a retirar</option>
                <option value="20000">20.000</option>
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="300000">300.000</option>
                <option value="otro">Otro monto</option>
                </select>
                {showCustomAmount && (
                    <input 
                        type="number" 
                        id="custom-amount"
                        name="custom-amount"
                        placeholder="Ingresa el monto"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        min="0"
                    />
                )}
                <select 
                    id="metodo-retiro" 
                    name="metodo-retiro"
                    value={metodoRetiro}
                    onChange={(e) => setMetodoRetiro(e.target.value)}
                >
                <option value="" disabled>Selecciona un método de retiro</option>
                <option value="cajero-automatico">Cajero Automático (ATM)</option>
                <option value="sucursal-bancaria">Sucursal bancaria</option>
                <option value="transferencia-bancaria">Transferencia bancaria</option>
                <option value="transferencia-otra-cuenta">Transferencia a otra cuenta</option>
                </select>
                <button onClick={WithdrawMoney}>Retirar Dinero</button>
            </div>
        </div>
    )   

}

export default Withdraw;