function TransactionsHistory() {

    const transacciones = [
        { fecha: "2025-10-16", tipo: "Depósito", monto: 500000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-10-10", tipo: "Retiro", monto: 200000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-09-29", tipo: "Transferencia", monto: 1000000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-09-15", tipo: "Depósito", monto: 750000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-09-05", tipo: "Retiro", monto: 300000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-08-28", tipo: "Transferencia", monto: 450000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-08-15", tipo: "Depósito", monto: 600000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-08-01", tipo: "Retiro", monto: 150000, metodo: "Cajero", cuenta: "Corriente" },
        { fecha: "2025-07-20", tipo: "Transferencia", monto: 800000, metodo: "Sucursal", cuenta: "Nomina" },
        { fecha: "2025-07-10", tipo: "Depósito", monto: 400000, metodo: "Transferencia", cuenta: "Ahorros" },
        { fecha: "2025-06-30", tipo: "Retiro", monto: 250000, metodo: "Cajero", cuenta: "Corriente" },
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
                    {transacciones.map((t, index) => (
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

export default TransactionsHistory;