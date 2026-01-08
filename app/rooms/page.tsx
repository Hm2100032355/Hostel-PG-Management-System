import Link from "next/link"

const rooms = [
  {
    id: 1,
    number: "101",
    floor: 1,
    sharing: "2-Sharing",
    totalBeds: 2,
    occupiedBeds: 2,
    rent: "₹8,000",
    type: "AC",
    status: "Occupied",
    facilities: ["AC", "Attached Bath", "WiFi"],
  },
  {
    id: 2,
    number: "102",
    floor: 1,
    sharing: "3-Sharing",
    totalBeds: 3,
    occupiedBeds: 2,
    rent: "₹7,500",
    type: "Non-AC",
    status: "Available",
    facilities: ["Fan", "Attached Bath", "WiFi"],
  },
  {
    id: 3,
    number: "103",
    floor: 1,
    sharing: "2-Sharing",
    totalBeds: 2,
    occupiedBeds: 2,
    rent: "₹8,000",
    type: "AC",
    status: "Occupied",
    facilities: ["AC", "Attached Bath", "WiFi"],
  },
  {
    id: 4,
    number: "201",
    floor: 2,
    sharing: "4-Sharing",
    totalBeds: 4,
    occupiedBeds: 3,
    rent: "₹6,500",
    type: "Non-AC",
    status: "Available",
    facilities: ["Fan", "Common Bath", "WiFi"],
  },
  {
    id: 5,
    number: "202",
    floor: 2,
    sharing: "3-Sharing",
    totalBeds: 3,
    occupiedBeds: 3,
    rent: "₹7,500",
    type: "AC",
    status: "Occupied",
    facilities: ["AC", "Attached Bath", "WiFi"],
  },
  {
    id: 6,
    number: "301",
    floor: 3,
    sharing: "Single",
    totalBeds: 1,
    occupiedBeds: 1,
    rent: "₹12,000",
    type: "AC",
    status: "Occupied",
    facilities: ["AC", "Attached Bath", "WiFi", "TV"],
  },
]

export default function RoomsPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Rooms & Beds
          </h4>
          <p className="text-muted mb-0">Manage room configuration and availability</p>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <button className="btn btn-outline-secondary" style={{ borderRadius: "10px" }}>
            <i className="bi bi-grid me-2"></i>Grid View
          </button>
          <Link href="/rooms/add" className="btn btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>Add Room
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon primary">
                <i className="bi bi-door-open"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  12
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Total Rooms
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon info">
                <i className="bi bi-lamp"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  48
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Total Beds
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon success">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  8
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  AC Rooms
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon warning">
                <i className="bi bi-tools"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  1
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Under Maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Cards Grid */}
      <div className="row g-4">
        {rooms.map((room) => (
          <div key={room.id} className="col-md-6 col-xl-4">
            <div className="card-custom h-100">
              <div className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                        Room {room.number}
                      </h5>
                      <span
                        className={`badge ${room.type === "AC" ? "bg-info-subtle text-info" : "bg-secondary-subtle text-secondary"}`}
                        style={{ borderRadius: "8px" }}
                      >
                        {room.type}
                      </span>
                    </div>
                    <small className="text-muted">
                      Floor {room.floor} • {room.sharing}
                    </small>
                  </div>
                  <span className={`vacancy-badge ${room.status === "Available" ? "available" : "occupied"}`}>
                    {room.status}
                  </span>
                </div>

                {/* Occupancy Progress */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Occupancy
                    </span>
                    <span className="fw-medium" style={{ fontSize: "13px", color: "#1e293b" }}>
                      {room.occupiedBeds}/{room.totalBeds} Beds
                    </span>
                  </div>
                  <div className="progress-custom">
                    <div
                      className="progress-bar-custom"
                      style={{
                        width: `${(room.occupiedBeds / room.totalBeds) * 100}%`,
                        background:
                          room.occupiedBeds === room.totalBeds
                            ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                            : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Rent */}
                <div
                  className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                  style={{ background: "#f8fafc" }}
                >
                  <span className="text-muted">Rent per Bed</span>
                  <span className="fw-bold" style={{ color: "#10b981" }}>
                    {room.rent}/month
                  </span>
                </div>

                {/* Facilities */}
                <div className="mb-3">
                  <small className="text-muted d-block mb-2">Facilities</small>
                  <div className="d-flex flex-wrap gap-2">
                    {room.facilities.map((facility) => (
                      <span
                        key={facility}
                        className="badge bg-primary-subtle text-primary px-2 py-1"
                        style={{ borderRadius: "6px", fontSize: "11px" }}
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm flex-grow-1" style={{ borderRadius: "8px" }}>
                    <i className="bi bi-eye me-1"></i>View
                  </button>
                  <button className="btn btn-outline-secondary btn-sm flex-grow-1" style={{ borderRadius: "8px" }}>
                    <i className="bi bi-pencil me-1"></i>Edit
                  </button>
                  <button className="btn btn-outline-success btn-sm" style={{ borderRadius: "8px" }}>
                    <i className="bi bi-person-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary px-5" style={{ borderRadius: "10px" }}>
          <i className="bi bi-arrow-down me-2"></i>Load More Rooms
        </button>
      </div>
    </div>
  )
}
