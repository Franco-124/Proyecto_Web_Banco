function Transfer() {
    return (
        <div id="transfer-box">
            <h2>Complete los campos para realizar la transferencia</h2>
            <div id="transfer-form">
                <input type="text" placeholder="Número de cuenta destino" />
                <select id="cantidad-dinero" name="cantidad-dinero" placeholder="Cantidad a transferir">
                <option value="" disabled selected>Selecciona una cantidad a transferir</option>
                <option value="20000">20.000</option>
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="300000">300.000</option>
                </select>
                <select id="tipo-cuenta" name="tipo-cuenta" placeholder="Tipo de cuenta">
                <option value="" disabled selected>Selecciona un tipo de cuenta</option>
                <option value="ahorros">Cuenta de Ahorros</option>
                <option value="corriente">Cuenta Corriente</option>
                <option value="nomina">Cuenta de Nómina</option>
                </select>
                <input type="text" placeholder="Descripción (opcional)" />
                <button>Transferir Dinero</button>
            </div>

        </div>
    )
}

export default Transfer;