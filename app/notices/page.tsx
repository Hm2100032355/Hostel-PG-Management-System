"use client"

import { useState } from "react"

const notices = [
  {
    id: 1,
    title: "Rent Due Reminder",
    content: "This is a reminder that rent for January is due by 5th.",
    date: "Jan 1, 2025",
    type: "Payment",
    target: "All Tenants",
  },
  {
    id: 2,
    title: "Water Supply Maintenance",
    content: "Water supply will be interrupted on Jan 10 from 10 AM to 2 PM for maintenance work.",
    date: "Jan 5, 2025",
    type: "Maintenance",
    target: "All Tenants",
  },
  {
    id: 3,
    title: "New Wi-Fi Password",
    content: "Wi-Fi password has been updated. Please contact reception for the new password.",
    date: "Dec 28, 2024",
    type: "General",
    target: "All Tenants",
  },
]

export default function NoticesPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Notices & Announcements
          </h4>
          <p className="text-muted mb-0">Create and manage notices for tenants</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }} onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle me-2"></i>Create Notice
        </button>
      </div>

      <div className="row g-4">
        {notices.map((notice) => (
          <div key={notice.id} className="col-md-6 col-lg-4">
            <div className="card-custom p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span
                  className={`badge ${
                    notice.type === "Payment"
                      ? "bg-success-subtle text-success"
                      : notice.type === "Maintenance"
                        ? "bg-warning-subtle text-warning"
                        : "bg-primary-subtle text-primary"
                  } px-2 py-1`}
                >
                  {notice.type}
                </span>
                <small className="text-muted">{notice.date}</small>
              </div>
              <h6 className="fw-bold mb-2" style={{ color: "#1e293b" }}>
                {notice.title}
              </h6>
              <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
                {notice.content}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-people me-1"></i>
                  {notice.target}
                </small>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger" style={{ borderRadius: "6px" }}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Notice Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: "16px" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Create Notice</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Notice Title</label>
                  <input type="text" className="form-control" placeholder="Enter title" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select">
                    <option>General</option>
                    <option>Payment</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea className="form-control" rows={4} placeholder="Enter notice content"></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Target Audience</label>
                  <select className="form-select">
                    <option>All Tenants</option>
                    <option>Specific Room</option>
                    <option>Specific Floor</option>
                  </select>
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
                  <i className="bi bi-send me-2"></i>Publish Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
