"use client"

export default function ReportsPage() {
  const reportTypes = [
    {
      title: "Occupancy Report",
      icon: "bi-graph-up",
      description: "View occupancy trends and statistics",
      color: "primary",
    },
    {
      title: "Revenue Report",
      icon: "bi-wallet2",
      description: "Track earnings and payment collections",
      color: "success",
    },
    { title: "Tenant Report", icon: "bi-people", description: "Analyze tenant data and history", color: "info" },
    {
      title: "Complaint Report",
      icon: "bi-exclamation-triangle",
      description: "Review complaint resolution metrics",
      color: "warning",
    },
    { title: "Room Utilization", icon: "bi-door-open", description: "Analyze room usage patterns", color: "secondary" },
    {
      title: "Payment Default",
      icon: "bi-cash-stack",
      description: "Track payment defaults and delays",
      color: "danger",
    },
  ]

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Reports & Analytics
          </h4>
          <p className="text-muted mb-0">Generate and view various reports</p>
        </div>
        <div className="d-flex gap-2">
          <select className="form-select" style={{ borderRadius: "10px", width: "150px" }}>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold" style={{ color: "#10b981" }}>
              75%
            </h3>
            <p className="text-muted mb-0">Avg Occupancy</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold" style={{ color: "#6366f1" }}>
              ₹12.5L
            </h3>
            <p className="text-muted mb-0">Total Revenue</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold" style={{ color: "#f59e0b" }}>
              95%
            </h3>
            <p className="text-muted mb-0">Collection Rate</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold" style={{ color: "#3b82f6" }}>
              4.5
            </h3>
            <p className="text-muted mb-0">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="row g-4">
        {reportTypes.map((report, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card-custom p-4 h-100" style={{ cursor: "pointer", transition: "transform 0.2s" }}>
              <div className={`stat-icon ${report.color} mb-3`}>
                <i className={`bi ${report.icon}`}></i>
              </div>
              <h6 className="fw-bold mb-2" style={{ color: "#1e293b" }}>
                {report.title}
              </h6>
              <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
                {report.description}
              </p>
              <button className="btn btn-outline-primary btn-sm" style={{ borderRadius: "8px" }}>
                <i className="bi bi-download me-2"></i>Generate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
