import "./accounts.css";

function Accounts(){
    const usuario = {
        nombre: "Johan Steven",
        numeroCuenta: "1023456789",
        tipoCuenta: "Ahorros",
        saldo: 4500000,
    };

    const transacciones = [
        { fecha: "2025-10-16", tipo: "Depósito", monto: 500000 },
        { fecha: "2025-10-10", tipo: "Retiro", monto: 200000 },
        { fecha: "2025-09-29", tipo: "Transferencia", monto: 1000000 },
    ];

    return (
        <div id="accounts-container">
            <h1>Gestión de Cuentas</h1>
            <div className="cards-container">
                <div className="account-card">
                    <h2>{usuario.nombre}</h2>
                    <p><strong>Número de Cuenta:</strong> {usuario.numeroCuenta}</p>
                    <p><strong>Tipo:</strong> {usuario.tipoCuenta}</p>
                </div>

                <div className="saldo-actual">
                    <h2>Saldo Actual</h2>
                    <p className="saldo-actual">${usuario.saldo.toLocaleString()}</p>
                </div>
            </div>

            <h2>Transacciones Recientes</h2>
            <table className="transactions-table">
                <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                </tr>
                </thead>
                <tbody>
                {transacciones.map((t, index) => (
                    <tr key={index}>
                    <td>{t.fecha}</td>
                    <td>{t.tipo}</td>
                    <td>${t.monto.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Accounts;