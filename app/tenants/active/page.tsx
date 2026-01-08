"use client"

const activeTenants = [
  {
    id: 1,
    name: "Rahul Kumar",
    room: "Room 101",
    bed: "Bed A",
    phone: "+91 9876543210",
    joinDate: "Jan 5, 2025",
    rent: 8000,
    status: "Paid",
  },
  {
    id: 2,
    name: "Suresh Reddy",
    room: "Room 203",
    bed: "Bed B",
    phone: "+91 8765432109",
    joinDate: "Dec 15, 2024",
    rent: 7500,
    status: "Paid",
  },
  {
    id: 3,
    name: "Amit Sharma",
    room: "Room 105",
    bed: "Bed A",
    phone: "+91 7654321098",
    joinDate: "Nov 1, 2024",
    rent: 8000,
    status: "Pending",
  },
  {
    id: 4,
    name: "Vijay Kumar",
    room: "Room 202",
    bed: "Bed C",
    phone: "+91 6543210987",
    joinDate: "Oct 20, 2024",
    rent: 6500,
    status: "Overdue",
  },
  {
    id: 5,
    name: "Ravi Teja",
    room: "Room 301",
    bed: "Bed A",
    phone: "+91 5432109876",
    joinDate: "Sep 10, 2024",
    rent: 7000,
    status: "Paid",
  },
]

export default function ActiveTenantsPage() {
  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Active Tenants
          </h4>
          <p className="text-muted mb-0">Currently staying tenants ({activeTenants.length})</p>
        </div>
      </div>

      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Tenant</th>
                <th>Room / Bed</th>
                <th>Phone</th>
                <th>Join Date</th>
                <th>Monthly Rent</th>
                <th>Payment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeTenants.map((tenant) => (
                <tr key={tenant.id}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: "36px",
                          height: "36px",
                          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
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
                  <td>
                    <span className="fw-medium">{tenant.room}</span>
                    <br />
                    <small className="text-muted">{tenant.bed}</small>
                  </td>
                  <td>{tenant.phone}</td>
                  <td>{tenant.joinDate}</td>
                  <td className="fw-semibold">₹{tenant.rent.toLocaleString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        tenant.status === "Paid"
                          ? "bg-success-subtle text-success"
                          : tenant.status === "Pending"
                            ? "bg-warning-subtle text-warning"
                            : "bg-danger-subtle text-danger"
                      } px-2 py-1`}
                    >
                      {tenant.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-1">
                      <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary" style={{ borderRadius: "6px" }}>
                        <i className="bi bi-pencil"></i>
                      </button>
                    </div>
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
