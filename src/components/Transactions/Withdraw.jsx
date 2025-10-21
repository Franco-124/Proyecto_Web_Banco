

function Withdraw() {
    return (
        <div id="withdraw-container">
            <h2>Complete los campos para realizar el retiro</h2>
            <div id="withdraw-form">
                <select id="tipo-cuenta" name="tipo-cuenta">
                <option value="" disabled selected>Selecciona un tipo de cuenta</option>
                <option value="ahorros">Cuenta de Ahorros</option>
                <option value="corriente">Cuenta Corriente</option>
                <option value="nomina">Cuenta de Nómina</option>
                </select>
                <select id="cantidad-dinero" name="cantidad-dinero" placeholder="Cantidad a retirar">
                <option value="" disabled selected>Selecciona una cantidad a retirar</option>
                <option value="20000">20.000</option>
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="300000">300.000</option>
                </select>
                <select id="metodo-retiro" name="metodo-retiro">
                <option value="" disabled selected>Selecciona un método de retiro</option>
                <option value="cajero-automatico">Cajero Automático (ATM)</option>
                <option value="sucursal-bancaria">Sucursal bancaria</option>
                <option value="transferencia-bancaria">Transferencia bancaria</option>
                <option value="transferencia-otra-cuenta">Transferencia a otra cuenta</option>
                </select>
                <button>Retirar Dinero</button>
            </div>
        </div>
    )   

}

export default Withdraw;