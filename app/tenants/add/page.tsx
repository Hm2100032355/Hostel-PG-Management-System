"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function AddTenantPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idType: "",
    idNumber: "",
    room: "",
    bed: "",
    joinDate: "",
    rent: "",
    deposit: "",
    emergencyName: "",
    emergencyPhone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Tenant added successfully!")
  }

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Add New Tenant
          </h4>
          <p className="text-muted mb-0">Register a new tenant to your property</p>
        </div>
        <Link href="/tenants" className="btn btn-outline-secondary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-arrow-left me-2"></i>Back to List
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Personal Information */}
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                <i className="bi bi-person me-2" style={{ color: "#6366f1" }}></i>
                Personal Information
              </h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ID Type *</label>
                  <select
                    className="form-select"
                    name="idType"
                    value={formData.idType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select ID Type</option>
                    <option value="aadhar">Aadhar Card</option>
                    <option value="pan">PAN Card</option>
                    <option value="passport">Passport</option>
                    <option value="driving">Driving License</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">ID Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Room Assignment */}
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                <i className="bi bi-door-open me-2" style={{ color: "#10b981" }}></i>
                Room Assignment
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Select Room *</label>
                  <select className="form-select" name="room" value={formData.room} onChange={handleChange} required>
                    <option value="">Select Room</option>
                    <option value="101">Room 101 (2-Sharing)</option>
                    <option value="102">Room 102 (3-Sharing)</option>
                    <option value="201">Room 201 (2-Sharing)</option>
                    <option value="202">Room 202 (4-Sharing)</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Select Bed *</label>
                  <select className="form-select" name="bed" value={formData.bed} onChange={handleChange} required>
                    <option value="">Select Bed</option>
                    <option value="A">Bed A</option>
                    <option value="B">Bed B</option>
                    <option value="C">Bed C</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Join Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Monthly Rent *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="rent"
                    value={formData.rent}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Security Deposit</label>
                  <input
                    type="number"
                    className="form-control"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="col-12">
            <div className="card-custom p-4">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                <i className="bi bi-telephone me-2" style={{ color: "#ef4444" }}></i>
                Emergency Contact
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Contact Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Contact Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex gap-3">
          <button type="submit" className="btn btn-primary px-4" style={{ borderRadius: "10px" }}>
            <i className="bi bi-check-circle me-2"></i>Add Tenant
          </button>
          <Link href="/tenants" className="btn btn-outline-secondary px-4" style={{ borderRadius: "10px" }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
