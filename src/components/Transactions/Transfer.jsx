import {useState} from "react";
import { toast } from "react-toastify";


function Transfer({ usuario_id }) {
    const [cuentaDestino, setCuentaDestino] = useState('');
    const [cantidadDinero, setCantidadDinero] = useState('');
    const [tipoCuenta, setTipoCuenta] = useState('');
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

    const VerifyAccount = () => {

        if (cuentaDestino.trim() === '') {
            toast.error("El número de cuenta destino no puede estar vacío");
            return;
        }

        const base_url = "http://127.0.0.1:3000";
        const endpoint = `${base_url}/transacciones/cuentas/${cuentaDestino}`;

        fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(data => {
            if (data.status_code === 401 || data.success === false){
                toast.error("Cuenta destino invalida")
            }
            else{
                toast.success("Cuenta destino valida ✅")
            }
        })
        .catch(error => {
            console.log(error);
            toast.error("Error al verificar la cuenta destino")
        })
    }

    const TransferMoney = () => {
        let Cantidad = cantidadDinero;
        if (cantidadDinero === 'otro') {
            Cantidad = customAmount;
        }

        const base_url = "http://127.0.0.1:3000";
        const endpoint = `${base_url}/transacciones/cuentas/transferir`;

        const data = {
            usuario_id: usuario_id,
            cuenta_destino: cuentaDestino,
            monto: Cantidad
        }

        console.log("Datos para la transferencia:", data);

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response);
            return response.json();
    
        })
        .then(data => {
            if (data.status_code === 400 || data.success === false){
                toast.error(data.response);
            }else{
                toast.success(`Transferencia realizada con éxito a la cuenta ${cuentaDestino}.`);
            }
        })
        .catch(error => {
            console.log(error);
            toast.error('Error al realizar la transferencia.');
        });
    }

    return (
        <div id="transfer-box">
            <h2>Complete los campos para realizar la transferencia</h2>
            <div id="transfer-form">
                <input 
                    type="text" 
                    placeholder="Número de cuenta destino"
                    value={cuentaDestino}
                    onChange={(e) => setCuentaDestino(e.target.value)}
                    onBlur={VerifyAccount}
                />
                <select 
                    id="cantidad-dinero" 
                    name="cantidad-dinero" 
                    placeholder="Cantidad a transferir"
                    value={cantidadDinero}
                    onChange={handleAmountChange}
                >
                <option value="" disabled>Selecciona una cantidad a transferir</option>
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
                    id="tipo-cuenta" 
                    name="tipo-cuenta" 
                    placeholder="Tipo de cuenta"
                    value={tipoCuenta}
                    onChange={(e) => setTipoCuenta(e.target.value)}
                >
                <option value="" disabled>Selecciona un tipo de cuenta</option>
                <option value="ahorros">Cuenta de Ahorros</option>
                <option value="corriente">Cuenta Corriente</option>
                </select>
                <button onClick={TransferMoney}>Transferir Dinero</button>
            </div>

        </div>
    )
}

export default Transfer;