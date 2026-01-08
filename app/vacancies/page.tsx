"use client"

import Link from "next/link"

const vacancies = [
  { room: "Room 101", type: "2-Sharing", floor: "Ground", beds: 1, rent: 8000, amenities: ["AC", "Attached Bath"] },
  { room: "Room 102", type: "3-Sharing", floor: "Ground", beds: 1, rent: 6500, amenities: ["Fan", "Common Bath"] },
  { room: "Room 202", type: "4-Sharing", floor: "First", beds: 2, rent: 5500, amenities: ["Fan", "Common Bath"] },
  {
    room: "Room 301",
    type: "2-Sharing",
    floor: "Second",
    beds: 2,
    rent: 7500,
    amenities: ["AC", "Attached Bath", "Balcony"],
  },
]

export default function VacanciesMainPage() {
  const totalVacant = vacancies.reduce((sum, v) => sum + v.beds, 0)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Vacancies Overview
          </h4>
          <p className="text-muted mb-0">Available beds for new tenants</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/tenants/add" className="btn btn-success" style={{ borderRadius: "10px" }}>
            <i className="bi bi-person-plus me-2"></i>Add Tenant
          </Link>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#10b981" }}>
              {totalVacant}
            </h3>
            <small className="text-muted">Total Vacant Beds</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#6366f1" }}>
              {vacancies.length}
            </h3>
            <small className="text-muted">Rooms with Vacancy</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#f59e0b" }}>
              ₹5,500
            </h3>
            <small className="text-muted">Min Rent/Bed</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-custom p-4 text-center">
            <h3 className="fw-bold mb-0" style={{ color: "#3b82f6" }}>
              ₹8,000
            </h3>
            <small className="text-muted">Max Rent/Bed</small>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {vacancies.map((vacancy, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card-custom p-4 h-100" style={{ borderTop: "4px solid #10b981" }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                    {vacancy.room}
                  </h6>
                  <small className="text-muted">{vacancy.floor} Floor</small>
                </div>
                <span className="badge bg-primary-subtle text-primary px-2 py-1">{vacancy.type}</span>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-muted">Available Beds</span>
                  <span className="fw-bold text-success">{vacancy.beds}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Rent/Bed</span>
                  <span className="fw-bold">₹{vacancy.rent.toLocaleString()}</span>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {vacancy.amenities.map((amenity, i) => (
                  <span key={i} className="badge bg-light text-dark" style={{ fontSize: "11px" }}>
                    {amenity}
                  </span>
                ))}
              </div>
              <Link href="/tenants/add" className="btn btn-success w-100" style={{ borderRadius: "8px" }}>
                <i className="bi bi-person-plus me-2"></i>Assign Tenant
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
