"use client"

import { useState } from "react"

const roomTypes = [
  { type: "Single Room", count: 4, rent: 10000, description: "Private room for single occupant" },
  { type: "2-Sharing", count: 8, rent: 7500, description: "Room shared between 2 persons" },
  { type: "3-Sharing", count: 6, rent: 6000, description: "Room shared between 3 persons" },
  { type: "4-Sharing", count: 4, rent: 5000, description: "Room shared between 4 persons" },
]

export default function RoomBedConfigPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Room & Bed Configuration
          </h4>
          <p className="text-muted mb-0">Configure room types and pricing</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }} onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle me-2"></i>Add Room Type
        </button>
      </div>

      <div className="row g-4">
        {roomTypes.map((room, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card-custom p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="stat-icon primary">
                  <i className="bi bi-door-open"></i>
                </div>
                <div className="d-flex gap-1">
                  <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger" style={{ borderRadius: "6px" }}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
              <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                {room.type}
              </h6>
              <p className="text-muted mb-3" style={{ fontSize: "13px" }}>
                {room.description}
              </p>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Rooms</span>
                <span className="fw-semibold">{room.count}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Rent/Bed</span>
                <span className="fw-bold text-success">₹{room.rent.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: "16px" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Add Room Type</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Room Type Name</label>
                  <input type="text" className="form-control" placeholder="e.g., 2-Sharing" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Rooms</label>
                  <input type="number" className="form-control" placeholder="Enter count" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rent Per Bed (₹)</label>
                  <input type="number" className="form-control" placeholder="Enter rent amount" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows={2} placeholder="Brief description"></textarea>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowModal(false)}
                  style={{ borderRadius: "8px" }}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" style={{ borderRadius: "8px" }}>
                  <i className="bi bi-check-circle me-2"></i>Add Room Type
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
