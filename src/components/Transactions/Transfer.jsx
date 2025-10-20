
function Transfer() {
    return (
        <div id="transfer-box">
            <h2>Complete los campos para realizar la transferencia</h2>
            <div id="transfer-form">
                <input type="text" placeholder="Número de cuenta destino" />
                <input type="number" placeholder="Valor a transferir"step="0.01"/>
                <input type="text" placeholder="Tipo de cuenta" />
                <input type="text" placeholder="Descripción (opcional)" />
                <button>Transferir Dinero</button>
            </div>

        </div>
    )
}

export default Transfer;