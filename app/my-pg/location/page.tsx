"use client"

import type React from "react"

import { useState } from "react"
import { usePG } from "@/lib/pg-context"

export default function LocationDetailsPage() {
  const { pgInfo, updatePGInfo } = usePG()
  const [formData, setFormData] = useState({
    address: pgInfo.address,
    city: pgInfo.city,
    state: "Telangana",
    pincode: "500081",
    landmark: "Near Tech Park",
    latitude: "17.4485",
    longitude: "78.3908",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    updatePGInfo({ address: formData.address, city: formData.city })
    alert("Location details saved!")
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
          Location Details
        </h4>
        <p className="text-muted mb-0">Update your property location information</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card-custom p-4">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-geo-alt me-2" style={{ color: "#ef4444" }}></i>
              Address Information
            </h5>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Full Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">City *</label>
                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">State *</label>
                <select className="form-select" name="state" value={formData.state} onChange={handleChange}>
                  <option value="Telangana">Telangana</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">PIN Code *</label>
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Nearby Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="my-4" />

            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-pin-map me-2" style={{ color: "#3b82f6" }}></i>
              Map Coordinates
            </h5>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary" style={{ borderRadius: "10px" }} onClick={handleSave}>
                <i className="bi bi-check-circle me-2"></i>Save Location
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-map me-2" style={{ color: "#10b981" }}></i>
              Map Preview
            </h5>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{ height: "300px", background: "#f1f5f9" }}
            >
              <div className="text-center text-muted">
                <i className="bi bi-map" style={{ fontSize: "48px" }}></i>
                <p className="mb-0 mt-2">Map Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
