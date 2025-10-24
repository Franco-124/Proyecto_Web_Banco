function Deposit() {
    return (
        <div id="deposit-container">
            <h2>Realizar Depósito</h2>
            <div id="deposit-form">
                <select id="tipo-cuenta" name="tipo-cuenta">
                <option value="" disabled selected>Selecciona un tipo de cuenta</option>
                <option value="ahorros">Cuenta de Ahorros</option>
                <option value="corriente">Cuenta Corriente</option>
                <option value="nomina">Cuenta de Nómina</option>
                </select>
                <select id="metodo-deposito" name="metodo-deposito" placeholder="Método de depósito">
                <option value="" disabled selected>Selecciona un método de depósito</option>
                <option value="cajero-automatico">Cajero Automático</option>
                <option value="sucursal-bancaria">Sucursal bancaria</option>
                <option value="transferencia-bancaria">Transferencia bancaria</option>
                </select>
                <select id="cantidad-dinero" name="cantidad-dinero" placeholder="Cantidad a depositar">
                <option value="" disabled selected>Selecciona una cantidad a depositar</option>
                <option value="20000">20.000</option>
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="300000">300.000</option>
                </select>
                <input type="text" placeholder="Descripción (Opcional)" />
                <button>Depositar Dinero</button>
            </div>

        </div>
    )
}
export default Deposit;