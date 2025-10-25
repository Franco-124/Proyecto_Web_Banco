

function ExpensesHistory() {

    const expenses = [
        { fecha: "2025-09-29", tipo: "Transferencia", monto: 1000000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-08-28", tipo: "Transferencia", monto: 450000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-07-20", tipo: "Transferencia", monto: 800000, metodo: "Sucursal", cuenta: "Nomina" },
    ];

    return (
        <div className="transactions-history">
                <h2>Transacciones Recientes</h2>
                <table className="transactions-table">
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Monto</th>
                        <th>Metodo</th>
                        <th>Cuenta</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expenses.map((t, index) => (
                        <tr key={index}>
                        <td>{t.fecha}</td>
                        <td>{t.tipo}</td>
                        <td>${t.monto.toLocaleString()}</td>
                        <td>{t.metodo}</td>
                        <td>{t.cuenta}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>

    )
}

export default ExpensesHistory;