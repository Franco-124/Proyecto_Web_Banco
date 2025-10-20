

function Withdraw() {
    return (
        <div id="withdraw-container">
            <h2>Complete los campos para realizar el retiro</h2>
            <div id="withdraw-form">
                <input type="text" placeholder="Tipo de cuenta" step="0.01" />
                <input type="number" placeholder="Cantidad a retirar" step="0.01" />
                <input type="text" placeholder="Metodo de retiro" />
                <button>Retirar Dinero</button>
            </div>

        </div>
        
    )
}

export default Withdraw;