"use client"

import Link from "next/link"

const occupancyData = [
  { roomType: "Single Room", total: 4, occupied: 4, vacant: 0, rate: 100 },
  { roomType: "2-Sharing", total: 16, occupied: 13, vacant: 3, rate: 81 },
  { roomType: "3-Sharing", total: 18, occupied: 13, vacant: 5, rate: 72 },
  { roomType: "4-Sharing", total: 10, occupied: 6, vacant: 4, rate: 60 },
]

const floorWise = [
  { floor: "Ground Floor", rooms: 4, beds: 12, occupied: 10, vacant: 2 },
  { floor: "First Floor", rooms: 4, beds: 16, occupied: 14, vacant: 2 },
  { floor: "Second Floor", rooms: 4, beds: 20, occupied: 12, vacant: 8 },
]

export default function OccupancyStatusPage() {
  const totalBeds = 48
  const occupiedBeds = 36
  const vacantBeds = 12
  const occupancyRate = Math.round((occupiedBeds / totalBeds) * 100)

  return (
    <div className="animate-fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Occupancy Status
          </h4>
          <p className="text-muted mb-0">Real-time view of your property occupancy</p>
        </div>
        <Link href="/rooms/vacancies" className="btn btn-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-plus-circle me-2"></i>Update Vacancies
        </Link>
      </div>

      {/* Overall Stats */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon primary mx-auto mb-3">
              <i className="bi bi-building"></i>
            </div>
            <h3 className="fw-bold" style={{ color: "#1e293b" }}>
              {totalBeds}
            </h3>
            <p className="text-muted mb-0">Total Beds</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon success mx-auto mb-3">
              <i className="bi bi-person-check"></i>
            </div>
            <h3 className="fw-bold" style={{ color: "#059669" }}>
              {occupiedBeds}
            </h3>
            <p className="text-muted mb-0">Occupied Beds</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon warning mx-auto mb-3">
              <i className="bi bi-calendar-x"></i>
            </div>
            <h3 className="fw-bold" style={{ color: "#d97706" }}>
              {vacantBeds}
            </h3>
            <p className="text-muted mb-0">Vacant Beds</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon info mx-auto mb-3">
              <i className="bi bi-graph-up"></i>
            </div>
            <h3 className="fw-bold" style={{ color: "#0891b2" }}>
              {occupancyRate}%
            </h3>
            <p className="text-muted mb-0">Occupancy Rate</p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Room Type Wise */}
        <div className="col-lg-6">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-door-open me-2" style={{ color: "#6366f1" }}></i>
              Room Type Wise Occupancy
            </h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead style={{ background: "#f8fafc" }}>
                  <tr>
                    <th>Room Type</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Occupied</th>
                    <th className="text-center">Vacant</th>
                    <th className="text-center">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {occupancyData.map((item, index) => (
                    <tr key={index}>
                      <td className="fw-medium">{item.roomType}</td>
                      <td className="text-center">{item.total}</td>
                      <td className="text-center">
                        <span className="badge bg-success-subtle text-success px-2 py-1">{item.occupied}</span>
                      </td>
                      <td className="text-center">
                        <span className="badge bg-warning-subtle text-warning px-2 py-1">{item.vacant}</span>
                      </td>
                      <td className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <div className="progress" style={{ width: "60px", height: "6px" }}>
                            <div
                              className={`progress-bar ${item.rate >= 80 ? "bg-success" : item.rate >= 50 ? "bg-warning" : "bg-danger"}`}
                              style={{ width: `${item.rate}%` }}
                            ></div>
                          </div>
                          <small className="fw-medium">{item.rate}%</small>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Floor Wise */}
        <div className="col-lg-6">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-layers me-2" style={{ color: "#10b981" }}></i>
              Floor Wise Breakdown
            </h5>
            <div className="d-flex flex-column gap-3">
              {floorWise.map((floor, index) => (
                <div key={index} className="p-3 rounded-3" style={{ background: "#f8fafc" }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-semibold mb-0" style={{ color: "#1e293b" }}>
                      {floor.floor}
                    </h6>
                    <span className="badge bg-primary-subtle text-primary px-2 py-1">{floor.rooms} Rooms</span>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <small className="text-muted">
                      <i className="bi bi-lamp me-1"></i>
                      {floor.beds} Beds
                    </small>
                    <small className="text-success">
                      <i className="bi bi-check-circle me-1"></i>
                      {floor.occupied} Occupied
                    </small>
                    <small className="text-warning">
                      <i className="bi bi-clock me-1"></i>
                      {floor.vacant} Vacant
                    </small>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${(floor.occupied / floor.beds) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
