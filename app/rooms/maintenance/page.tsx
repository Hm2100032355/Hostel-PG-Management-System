"use client"

const maintenanceItems = [
  { id: 1, room: "Room 103", issue: "AC Repair", status: "Pending", reportedDate: "Jan 5, 2025", priority: "High" },
  {
    id: 2,
    room: "Room 205",
    issue: "Plumbing Issue",
    status: "In Progress",
    reportedDate: "Jan 4, 2025",
    priority: "Medium",
  },
  {
    id: 3,
    room: "Room 301",
    issue: "Light Fixture",
    status: "Completed",
    reportedDate: "Jan 2, 2025",
    priority: "Low",
  },
]

export default function MaintenanceStatusPage() {
  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Maintenance Status
          </h4>
          <p className="text-muted mb-0">Track room maintenance and repairs</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-plus-circle me-2"></i>Add Maintenance
        </button>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#ef4444" }}>
              1
            </h3>
            <small className="text-muted">Pending</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#f59e0b" }}>
              1
            </h3>
            <small className="text-muted">In Progress</small>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#10b981" }}>
              1
            </h3>
            <small className="text-muted">Completed</small>
          </div>
        </div>
      </div>

      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Room</th>
                <th>Issue</th>
                <th>Reported Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceItems.map((item) => (
                <tr key={item.id}>
                  <td className="fw-medium">{item.room}</td>
                  <td>{item.issue}</td>
                  <td>{item.reportedDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.priority === "High"
                          ? "bg-danger-subtle text-danger"
                          : item.priority === "Medium"
                            ? "bg-warning-subtle text-warning"
                            : "bg-info-subtle text-info"
                      } px-2 py-1`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Pending"
                          ? "bg-danger"
                          : item.status === "In Progress"
                            ? "bg-warning"
                            : "bg-success"
                      } px-2 py-1`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
