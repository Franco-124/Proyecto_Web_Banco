

function DebtsHistory() {

    const userDebt = {
    "usuario_id": 1015332416,
    "nombre_usuario": "Johan Steven Franco Álvarez",
    "deudas": [
      {
        "id_prestamo": 202501,
        "monto_total": 2500000,
        "plazo_meses": 12,
        "interes_anual": 8.5,
        "cuota_mensual": 208333,
        "saldo_restante": 1750000,
        "pagos_realizados": 4,
        "pagos_pendientes": 8,
        "fecha_inicio": "2025-07-15",
        "fecha_proximo_pago": "2025-11-15",
        "estado": "pendiente"
      },
      {
        "id_prestamo": 202423,
        "monto_total": 1800000,
        "plazo_meses": 6,
        "interes_anual": 9.2,
        "cuota_mensual": 300000,
        "saldo_restante": 300000,
        "pagos_realizados": 5,
        "pagos_pendientes": 1,
        "fecha_inicio": "2025-02-05",
        "fecha_proximo_pago": "2025-11-05",
        "estado": "pendiente"
      },
       {
        "id_prestamo": 202423,
        "monto_total": 1800000,
        "plazo_meses": 6,
        "interes_anual": 9.2,
        "cuota_mensual": 300000,
        "saldo_restante": 300000,
        "pagos_realizados": 5,
        "pagos_pendientes": 1,
        "fecha_inicio": "2025-02-05",
        "fecha_proximo_pago": "2025-11-05",
        "estado": "pendiente"
      },
       {
        "id_prestamo": 202423,
        "monto_total": 1800000,
        "plazo_meses": 6,
        "interes_anual": 9.2,
        "cuota_mensual": 300000,
        "saldo_restante": 300000,
        "pagos_realizados": 5,
        "pagos_pendientes": 1,
        "fecha_inicio": "2025-02-05",
        "fecha_proximo_pago": "2025-11-05",
        "estado": "pendiente"
      }
    ]
    };

    const PendingDebts = userDebt.deudas.filter(deuda => deuda.estado == "pendiente");

     return (
        <div className="debt-list">
        <h2>Deudas de {userDebt.nombre_usuario}</h2>
        <div className="debt-cards">
            {PendingDebts.map((deuda) => (
            <div className={`debt-card ${deuda.estado}`} key={deuda.id_prestamo}>
                <div className="debt-header">
                <h3>Préstamo #{deuda.id_prestamo}</h3>
                <span className={`loan-status ${deuda.estado}`}>
                    {deuda.estado}
                </span>
                </div>

                <div className="debt-body">
                <p><strong>Monto:</strong> ${deuda.monto_total.toLocaleString()}</p>
                <p><strong>Saldo:</strong> ${deuda.saldo_restante.toLocaleString()}</p>
                <p><strong>Cuota:</strong> ${deuda.cuota_mensual.toLocaleString()}</p>
                <p><strong>Pagos:</strong> {deuda.pagos_realizados}/{deuda.pagos_pendientes + deuda.pagos_realizados}</p>
                <p><strong>Próximo:</strong> {deuda.fecha_proximo_pago || "Completado"}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default DebtsHistory;