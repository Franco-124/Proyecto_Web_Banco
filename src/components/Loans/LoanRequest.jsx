
function LoanRequest() {
    return  (
        <div className="loan-form">
            <h1>Solicitud de Prestamo</h1>
            <input type="number" placeholder="Ingrese el monto del prestamo"/> 
            <select id="plazo-meses" name="plazo-meses" placeholder="Plazo en meses">
                <option value="" disabled selected>Selecciona un plazo en meses</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
                <option value="48">48 meses</option>
            </select>
            <button>Solicitar Prestamo</button>
        </div>
    )
}

export default LoanRequest;