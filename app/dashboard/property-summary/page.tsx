"use client"

import { usePG } from "@/lib/pg-context"

export default function PropertySummaryPage() {
  const { pgInfo } = usePG()

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
          Property Summary
        </h4>
        <p className="text-muted mb-0">Overview of your property details</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-building me-2" style={{ color: "#6366f1" }}></i>
              Property Details
            </h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-between p-3 rounded-3" style={{ background: "#f8fafc" }}>
                <span className="text-muted">Property Name</span>
                <span className="fw-semibold">{pgInfo.hostelName}</span>
              </div>
              <div className="d-flex justify-content-between p-3 rounded-3" style={{ background: "#f8fafc" }}>
                <span className="text-muted">Owner</span>
                <span className="fw-semibold">{pgInfo.ownerName}</span>
              </div>
              <div className="d-flex justify-content-between p-3 rounded-3" style={{ background: "#f8fafc" }}>
                <span className="text-muted">Location</span>
                <span className="fw-semibold">{pgInfo.city}</span>
              </div>
              <div className="d-flex justify-content-between p-3 rounded-3" style={{ background: "#f8fafc" }}>
                <span className="text-muted">Property Type</span>
                <span className="fw-semibold">Boys PG</span>
              </div>
              <div className="d-flex justify-content-between p-3 rounded-3" style={{ background: "#f8fafc" }}>
                <span className="text-muted">Category</span>
                <span className="badge bg-primary-subtle text-primary px-2 py-1">Premium</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-bar-chart me-2" style={{ color: "#10b981" }}></i>
              Capacity Overview
            </h5>
            <div className="row g-3">
              <div className="col-6">
                <div className="p-3 rounded-3 text-center" style={{ background: "#dbeafe" }}>
                  <h3 className="fw-bold mb-0" style={{ color: "#2563eb" }}>
                    3
                  </h3>
                  <small className="text-muted">Floors</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 rounded-3 text-center" style={{ background: "#d1fae5" }}>
                  <h3 className="fw-bold mb-0" style={{ color: "#059669" }}>
                    12
                  </h3>
                  <small className="text-muted">Rooms</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 rounded-3 text-center" style={{ background: "#fef3c7" }}>
                  <h3 className="fw-bold mb-0" style={{ color: "#d97706" }}>
                    48
                  </h3>
                  <small className="text-muted">Total Beds</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 rounded-3 text-center" style={{ background: "#f3e8ff" }}>
                  <h3 className="fw-bold mb-0" style={{ color: "#7c3aed" }}>
                    36
                  </h3>
                  <small className="text-muted">Occupied</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card-custom p-4">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-stars me-2" style={{ color: "#f59e0b" }}></i>
              Available Amenities
            </h5>
            <div className="d-flex flex-wrap gap-2">
              {[
                "Free Wi-Fi",
                "Power Backup",
                "24/7 Security",
                "CCTV",
                "Home Food",
                "AC Rooms",
                "Parking",
                "Laundry",
                "Housekeeping",
                "Water Supply",
              ].map((amenity) => (
                <span
                  key={amenity}
                  className="badge bg-success-subtle text-success px-3 py-2"
                  style={{ borderRadius: "20px" }}
                >
                  <i className="bi bi-check-circle me-1"></i>
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
