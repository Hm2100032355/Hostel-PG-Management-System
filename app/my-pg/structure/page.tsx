"use client"

import type React from "react"

import { useState } from "react"

export default function PropertyStructurePage() {
  const [formData, setFormData] = useState({
    totalFloors: "3",
    totalRooms: "12",
    totalBeds: "48",
    commonAreas: "2",
    parkingSpaces: "10",
    buildingAge: "5",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
          Property Structure
        </h4>
        <p className="text-muted mb-0">Define your property's physical structure</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card-custom p-4">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-building me-2" style={{ color: "#6366f1" }}></i>
              Building Details
            </h5>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Total Floors *</label>
                <input
                  type="number"
                  className="form-control"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Total Rooms *</label>
                <input
                  type="number"
                  className="form-control"
                  name="totalRooms"
                  value={formData.totalRooms}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Total Beds *</label>
                <input
                  type="number"
                  className="form-control"
                  name="totalBeds"
                  value={formData.totalBeds}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Common Areas</label>
                <input
                  type="number"
                  className="form-control"
                  name="commonAreas"
                  value={formData.commonAreas}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Parking Spaces</label>
                <input
                  type="number"
                  className="form-control"
                  name="parkingSpaces"
                  value={formData.parkingSpaces}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Building Age (years)</label>
                <input
                  type="number"
                  className="form-control"
                  name="buildingAge"
                  value={formData.buildingAge}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary" style={{ borderRadius: "10px" }}>
                <i className="bi bi-check-circle me-2"></i>Save Structure
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              Structure Summary
            </h5>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 rounded-3" style={{ background: "#dbeafe" }}>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Floors</span>
                  <span className="fw-bold" style={{ color: "#2563eb" }}>
                    {formData.totalFloors}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-3" style={{ background: "#d1fae5" }}>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Rooms</span>
                  <span className="fw-bold" style={{ color: "#059669" }}>
                    {formData.totalRooms}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-3" style={{ background: "#fef3c7" }}>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Beds</span>
                  <span className="fw-bold" style={{ color: "#d97706" }}>
                    {formData.totalBeds}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
