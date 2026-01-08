"use client"

import { useState } from "react"

const complaints = [
  {
    id: 1,
    tenant: "Rahul Kumar",
    room: "Room 102",
    issue: "Water Leakage",
    description: "Bathroom tap is leaking continuously",
    date: "Jan 5, 2025",
    status: "Open",
    priority: "High",
  },
  {
    id: 2,
    tenant: "Suresh Reddy",
    room: "Room 201",
    issue: "Wi-Fi Issue",
    description: "Internet speed is very slow",
    date: "Jan 4, 2025",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    tenant: "Amit Sharma",
    room: "Room 105",
    issue: "AC Not Working",
    description: "AC not cooling properly",
    date: "Jan 3, 2025",
    status: "Resolved",
    priority: "High",
  },
  {
    id: 4,
    tenant: "Vijay Kumar",
    room: "Room 302",
    issue: "Light Issue",
    description: "Room light flickering",
    date: "Jan 2, 2025",
    status: "Resolved",
    priority: "Low",
  },
]

export default function ComplaintsPage() {
  const [filter, setFilter] = useState("all")

  const filteredComplaints = complaints.filter(
    (c) => filter === "all" || c.status.toLowerCase().replace(" ", "-") === filter,
  )

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Complaints Management
          </h4>
          <p className="text-muted mb-0">Track and resolve tenant complaints</p>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#ef4444" }}>
              1
            </h3>
            <small className="text-muted">Open</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#f59e0b" }}>
              1
            </h3>
            <small className="text-muted">In Progress</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#10b981" }}>
              2
            </h3>
            <small className="text-muted">Resolved</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-custom p-3 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#6366f1" }}>
              4
            </h3>
            <small className="text-muted">Total</small>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card-custom p-4 mb-4">
        <div className="d-flex flex-wrap gap-2">
          {["all", "open", "in-progress", "resolved"].map((f) => (
            <button
              key={f}
              className={`btn btn-sm ${filter === f ? "btn-primary" : "btn-outline-secondary"}`}
              style={{ borderRadius: "20px" }}
              onClick={() => setFilter(f)}
            >
              {f
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>
      </div>

      {/* Complaints List */}
      <div className="row g-4">
        {filteredComplaints.map((complaint) => (
          <div key={complaint.id} className="col-md-6">
            <div
              className="card-custom p-4 h-100"
              style={{
                borderLeft: `4px solid ${
                  complaint.status === "Open" ? "#ef4444" : complaint.status === "In Progress" ? "#f59e0b" : "#10b981"
                }`,
              }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                    {complaint.issue}
                  </h6>
                  <small className="text-muted">
                    {complaint.tenant} - {complaint.room}
                  </small>
                </div>
                <div className="d-flex gap-2">
                  <span
                    className={`badge ${
                      complaint.priority === "High"
                        ? "bg-danger-subtle text-danger"
                        : complaint.priority === "Medium"
                          ? "bg-warning-subtle text-warning"
                          : "bg-info-subtle text-info"
                    } px-2 py-1`}
                  >
                    {complaint.priority}
                  </span>
                  <span
                    className={`badge ${
                      complaint.status === "Open"
                        ? "bg-danger"
                        : complaint.status === "In Progress"
                          ? "bg-warning"
                          : "bg-success"
                    } px-2 py-1`}
                  >
                    {complaint.status}
                  </span>
                </div>
              </div>
              <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
                {complaint.description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar me-1"></i>
                  {complaint.date}
                </small>
                {complaint.status !== "Resolved" && (
                  <div className="d-flex gap-2">
                    {complaint.status === "Open" && (
                      <button className="btn btn-sm btn-warning" style={{ borderRadius: "6px" }}>
                        Start Work
                      </button>
                    )}
                    <button className="btn btn-sm btn-success" style={{ borderRadius: "6px" }}>
                      Mark Resolved
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
