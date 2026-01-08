"use client"

import { useState } from "react"

const bookingRequests = [
  {
    id: 1,
    name: "Vikram Singh",
    phone: "+91 9876543210",
    roomType: "2-Sharing",
    date: "Jan 15, 2025",
    status: "Pending",
    type: "Booking",
  },
  {
    id: 2,
    name: "Arun Kumar",
    phone: "+91 8765432109",
    roomType: "3-Sharing",
    date: "Jan 14, 2025",
    status: "Pending",
    type: "Visit",
  },
  {
    id: 3,
    name: "Priya Sharma",
    phone: "+91 7654321098",
    roomType: "Single",
    date: "Jan 13, 2025",
    status: "Approved",
    type: "Booking",
  },
  {
    id: 4,
    name: "Kiran Reddy",
    phone: "+91 6543210987",
    roomType: "2-Sharing",
    date: "Jan 12, 2025",
    status: "Approved",
    type: "Visit",
  },
  {
    id: 5,
    name: "Deepak Verma",
    phone: "+91 5432109876",
    roomType: "4-Sharing",
    date: "Jan 11, 2025",
    status: "Rejected",
    type: "Booking",
  },
]

export default function BookingsPage() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBookings = bookingRequests.filter((booking) => {
    const matchesFilter =
      filter === "all" || booking.status.toLowerCase() === filter || booking.type.toLowerCase() === filter
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Bookings & Visit Requests
          </h4>
          <p className="text-muted mb-0">Manage all booking and visit requests</p>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#3b82f6" }}>
              5
            </h3>
            <small className="text-muted">Total Requests</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#f59e0b" }}>
              2
            </h3>
            <small className="text-muted">Pending</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#10b981" }}>
              2
            </h3>
            <small className="text-muted">Approved</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#ef4444" }}>
              1
            </h3>
            <small className="text-muted">Rejected</small>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card-custom p-4 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-wrap gap-2">
              {["all", "pending", "approved", "rejected", "booking", "visit"].map((f) => (
                <button
                  key={f}
                  className={`btn btn-sm ${filter === f ? "btn-primary" : "btn-outline-secondary"}`}
                  style={{ borderRadius: "20px" }}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Room Type</th>
                <th>Request Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
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
                        {booking.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="fw-medium">{booking.name}</span>
                    </div>
                  </td>
                  <td>{booking.phone}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span
                      className={`badge ${booking.type === "Booking" ? "bg-primary-subtle text-primary" : "bg-info-subtle text-info"} px-2 py-1`}
                    >
                      {booking.type}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Pending"
                          ? "bg-warning-subtle text-warning"
                          : booking.status === "Approved"
                            ? "bg-success-subtle text-success"
                            : "bg-danger-subtle text-danger"
                      } px-2 py-1`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-1">
                      {booking.status === "Pending" && (
                        <>
                          <button className="btn btn-sm btn-success" style={{ borderRadius: "6px" }}>
                            <i className="bi bi-check"></i>
                          </button>
                          <button className="btn btn-sm btn-danger" style={{ borderRadius: "6px" }}>
                            <i className="bi bi-x"></i>
                          </button>
                        </>
                      )}
                      <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                        <i className="bi bi-eye"></i>
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
