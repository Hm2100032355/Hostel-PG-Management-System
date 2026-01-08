"use client"

const pendingPayments = [
  { id: 1, tenant: "Amit Sharma", room: "Room 105", amount: 8000, dueDate: "Jan 5, 2025", daysOverdue: 2 },
  { id: 2, tenant: "Vijay Kumar", room: "Room 202", amount: 6500, dueDate: "Jan 1, 2025", daysOverdue: 6 },
  { id: 3, tenant: "Sanjay Patel", room: "Room 304", amount: 7500, dueDate: "Jan 3, 2025", daysOverdue: 4 },
]

export default function PendingPaymentsPage() {
  const totalPending = pendingPayments.reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Pending Payments
          </h4>
          <p className="text-muted mb-0">Track overdue and pending rent payments</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-bell me-2"></i>Send Reminders
        </button>
      </div>

      <div className="card-custom p-4 mb-4" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="text-muted mb-1">Total Pending Amount</p>
            <h2 className="fw-bold mb-0" style={{ color: "#dc2626" }}>
              ₹{totalPending.toLocaleString()}
            </h2>
          </div>
          <div className="stat-icon danger">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {pendingPayments.map((payment) => (
          <div key={payment.id} className="col-md-6 col-lg-4">
            <div className="card-custom p-4 h-100" style={{ borderLeft: "4px solid #ef4444" }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                    {payment.tenant}
                  </h6>
                  <small className="text-muted">{payment.room}</small>
                </div>
                <span className="badge bg-danger-subtle text-danger px-2 py-1">{payment.daysOverdue} days overdue</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Amount Due</span>
                <h5 className="fw-bold mb-0" style={{ color: "#dc2626" }}>
                  ₹{payment.amount.toLocaleString()}
                </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Due Date</span>
                <span className="fw-medium">{payment.dueDate}</span>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-grow-1" style={{ borderRadius: "8px" }}>
                  <i className="bi bi-check me-1"></i>Mark Paid
                </button>
                <button className="btn btn-outline-primary" style={{ borderRadius: "8px" }}>
                  <i className="bi bi-bell"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
