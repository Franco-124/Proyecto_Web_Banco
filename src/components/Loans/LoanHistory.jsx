function LoansHistory() {

    const loans_history = [
        {
            "monto": 2500000,
            "plazo": "12 meses",
            "estado": "aprobado",
            "fecha_solicitud": "2025-01-15"
        },
        {
            "monto": 1800000,
            "plazo": "6 meses",
            "estado": "pendiente",
            "fecha_solicitud": "2025-03-02"
        },
        {
            "monto": 1800000,
            "plazo": "6 meses",
            "estado": "pendiente",
            "fecha_solicitud": "2025-03-02"
        },
        {
            "monto": 1800000,
            "plazo": "6 meses",
            "estado": "pendiente",
            "fecha_solicitud": "2025-03-02"
        }
        ];
    return (
        <div className="loans-history-box">
            <h1>Historial de Préstamos</h1>
            <div className="loans-list">
                {loans_history.map((loan, index) => (
                <div className="loan-card" key={index}>
                    <div className="loan-header">
                    <span className={`loan-status ${loan.estado}`}>{loan.estado}</span>
                    <span className="loan-date">📅 {loan.fecha_solicitud}</span>
                    </div>
                    <div className="loan-body">
                    <p><strong>Monto:</strong> ${loan.monto.toLocaleString()}</p>
                    <p><strong>Plazo:</strong> {loan.plazo}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default LoansHistory;