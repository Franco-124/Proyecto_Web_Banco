

import { useState } from 'react';
import { toast } from 'react-toastify';

function Deposit({ usuario_id }) {
    const [tipoCuenta, setTipoCuenta] = useState('');
    const [metodoDeposito, setMetodoDeposito] = useState('');
    const [cantidadDinero, setCantidadDinero] = useState('');
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

    const DepositMoney = () => {
        let Cantidad = cantidadDinero;
        if (cantidadDinero === 'otro') {
            Cantidad = customAmount;
        }

        const base_url = "http://127.0.0.1:3000";
        const endpoint = `${base_url}/transacciones/cuentas/depositar`;

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario_id: usuario_id,
                monto: Cantidad,
            })
        })
        .then(response => {
            if (!response.ok) {
                toast.error('Error al realizar el depósito.');
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                toast.success('Depósito realizado con éxito.');
            } else {
                toast.error('Error al realizar el depósito, Intentelo mas tarde o contacte con soporte.');
            }
        })
        .catch(error => {
            console.log(error);
            toast.error('Error al realizar el depósito.');
        });
    }
    
    return (
        <div id="deposit-container">
            <h2>Realizar Depósito</h2>
            <div id="deposit-form">
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
                    id="metodo-deposito" 
                    name="metodo-deposito" 
                    placeholder="Método de depósito"
                    value={metodoDeposito}
                    onChange={(e) => setMetodoDeposito(e.target.value)}
                >
                <option value="" disabled>Selecciona un método de depósito</option>
                <option value="cajero-automatico">Cajero Automático</option>
                <option value="sucursal-bancaria">Sucursal bancaria</option>
                <option value="transferencia-bancaria">Transferencia bancaria</option>
                </select>
                <select 
                    id="cantidad-dinero" 
                    name="cantidad-dinero" 
                    placeholder="Cantidad a depositar"
                    value={cantidadDinero}
                    onChange={handleAmountChange}
                >
                <option value="" disabled>Selecciona una cantidad a depositar</option>
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
                <button onClick={DepositMoney}>Depositar Dinero</button>
            </div>

        </div>
    )
}
export default Deposit;