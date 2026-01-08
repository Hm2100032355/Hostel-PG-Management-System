"use client"

const vacatedTenants = [
  {
    id: 1,
    name: "Kiran Reddy",
    room: "Room 104",
    vacatedDate: "Dec 31, 2024",
    stayDuration: "8 months",
    reason: "Job relocation",
  },
  {
    id: 2,
    name: "Mohan Das",
    room: "Room 302",
    vacatedDate: "Dec 15, 2024",
    stayDuration: "6 months",
    reason: "Personal reasons",
  },
  {
    id: 3,
    name: "Anil Kumar",
    room: "Room 201",
    vacatedDate: "Nov 30, 2024",
    stayDuration: "1 year",
    reason: "Course completed",
  },
]

export default function VacatedTenantsPage() {
  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Vacated Tenants
          </h4>
          <p className="text-muted mb-0">History of past tenants ({vacatedTenants.length})</p>
        </div>
        <button className="btn btn-outline-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-download me-2"></i>Export
        </button>
      </div>

      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Tenant</th>
                <th>Room</th>
                <th>Vacated Date</th>
                <th>Stay Duration</th>
                <th>Reason</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vacatedTenants.map((tenant) => (
                <tr key={tenant.id}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: "36px",
                          height: "36px",
                          background: "#94a3b8",
                          fontSize: "12px",
                        }}
                      >
                        {tenant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="fw-medium">{tenant.name}</span>
                    </div>
                  </td>
                  <td>{tenant.room}</td>
                  <td>{tenant.vacatedDate}</td>
                  <td>{tenant.stayDuration}</td>
                  <td>
                    <span className="badge bg-light text-dark px-2 py-1">{tenant.reason}</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                      <i className="bi bi-eye me-1"></i>View Details
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
