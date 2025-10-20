

function Deposit() {
    return (
        <div id="deposit-container">
            <h2>Realizar Depósito</h2>
            <div id="deposit-form">
                <input type="text" placeholder="Tipo de cuenta" />
                <input type="text" placeholder="Metodo de deposito" />
                <input type="number" placeholder="Cantidad a depositar" step="0.01" />
                <input type="text" placeholder="Descripción (Opcional)" />
                <button>Depositar Dinero</button>
            </div>

        </div>
    )
}

export default Deposit;