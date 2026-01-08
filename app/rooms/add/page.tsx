"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function AddRoomPage() {
  const [formData, setFormData] = useState({
    roomNumber: "",
    floor: "",
    roomType: "",
    totalBeds: "",
    rentPerBed: "",
    hasAC: false,
    hasAttachedBath: false,
    hasBalcony: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value
    setFormData({ ...formData, [target.name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Room added successfully!")
  }

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Add / Edit Room
          </h4>
          <p className="text-muted mb-0">Configure room details and amenities</p>
        </div>
        <Link href="/rooms" className="btn btn-outline-secondary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-arrow-left me-2"></i>Back to Rooms
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card-custom p-4">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                <i className="bi bi-door-open me-2" style={{ color: "#6366f1" }}></i>
                Room Details
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Room Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleChange}
                    placeholder="e.g., 101"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Floor *</label>
                  <select className="form-select" name="floor" value={formData.floor} onChange={handleChange} required>
                    <option value="">Select Floor</option>
                    <option value="ground">Ground Floor</option>
                    <option value="first">First Floor</option>
                    <option value="second">Second Floor</option>
                    <option value="third">Third Floor</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Room Type *</label>
                  <select
                    className="form-select"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="single">Single Room</option>
                    <option value="2-sharing">2-Sharing</option>
                    <option value="3-sharing">3-Sharing</option>
                    <option value="4-sharing">4-Sharing</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Total Beds *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="totalBeds"
                    value={formData.totalBeds}
                    onChange={handleChange}
                    min="1"
                    max="6"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Rent Per Bed (₹) *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="rentPerBed"
                    value={formData.rentPerBed}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card-custom p-4 h-100">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                <i className="bi bi-stars me-2" style={{ color: "#10b981" }}></i>
                Room Amenities
              </h5>
              <div className="d-flex flex-column gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="hasAC"
                    checked={formData.hasAC}
                    onChange={handleChange}
                    id="hasAC"
                  />
                  <label className="form-check-label" htmlFor="hasAC">
                    <i className="bi bi-snow me-2"></i>Air Conditioning
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="hasAttachedBath"
                    checked={formData.hasAttachedBath}
                    onChange={handleChange}
                    id="hasAttachedBath"
                  />
                  <label className="form-check-label" htmlFor="hasAttachedBath">
                    <i className="bi bi-droplet me-2"></i>Attached Bathroom
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="hasBalcony"
                    checked={formData.hasBalcony}
                    onChange={handleChange}
                    id="hasBalcony"
                  />
                  <label className="form-check-label" htmlFor="hasBalcony">
                    <i className="bi bi-sun me-2"></i>Balcony
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex gap-3">
          <button type="submit" className="btn btn-primary px-4" style={{ borderRadius: "10px" }}>
            <i className="bi bi-check-circle me-2"></i>Save Room
          </button>
          <Link href="/rooms" className="btn btn-outline-secondary px-4" style={{ borderRadius: "10px" }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
