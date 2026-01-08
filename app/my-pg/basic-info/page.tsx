"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePG } from "@/lib/pg-context"

export default function BasicPGInfoPage() {
  const { pgInfo, updatePGInfo } = usePG()

  const [formData, setFormData] = useState({
    pgName: pgInfo.hostelName,
    propertyType: ["boys"],
    pgCategory: "premium",
    yearEstablished: "2020",
    totalCapacity: "48",
    ownershipType: "individual",
    operationalStatus: "active",
    targetOccupants: ["professionals"],
    registrationNumber: "",
    gstNumber: "",
    tradeLicense: "yes",
    websiteUrl: "",
    listingTitle: "Affordable Boys PG in Madhapur near Metro",
    shortDescription: "Premium boys PG with modern amenities, 24/7 security, free Wi-Fi, and home-style food.",
    showInSearch: true,
    allowFeatured: true,
  })

  useEffect(() => {
    setFormData((prev) => ({ ...prev, pgName: pgInfo.hostelName }))
  }, [pgInfo.hostelName])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updatePGInfo({ hostelName: formData.pgName })
    alert("Basic PG information saved successfully!")
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Basic PG Information
          </h4>
          <p className="text-muted mb-0">Add core details about your PG / Hostel</p>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <Link href="/dashboard" className="btn btn-outline-secondary" style={{ borderRadius: "10px" }}>
            <i className="bi bi-arrow-left me-2"></i>Back
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Primary Details */}
        <div className="card-custom p-4 mb-4">
          <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
            <i className="bi bi-building me-2" style={{ color: "#6366f1" }}></i>
            Primary Details
          </h5>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-medium">
                PG / Hostel Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="Enter PG / Hostel Name"
                value={formData.pgName}
                onChange={(e) => setFormData({ ...formData, pgName: e.target.value })}
                required
              />
              <small className="text-muted">This name will be displayed throughout the dashboard</small>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium">Year of Establishment</label>
              <select
                className="form-select form-select-custom"
                value={formData.yearEstablished}
                onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
              >
                <option value="">Select year</option>
                {[...Array(30)].map((_, i) => (
                  <option key={i} value={2025 - i}>
                    {2025 - i}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium">
                Property Type <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-wrap gap-2">
                {["Boys PG", "Girls PG", "Co-Living", "Hostel", "Working Professionals", "Student PG"].map((type) => (
                  <div key={type} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={type}
                      checked={formData.propertyType.includes(type.toLowerCase().replace(" ", "-"))}
                      onChange={() => {}}
                    />
                    <label className="form-check-label" htmlFor={type}>
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium">PG Category</label>
              <select
                className="form-select form-select-custom"
                value={formData.pgCategory}
                onChange={(e) => setFormData({ ...formData, pgCategory: e.target.value })}
              >
                <option value="budget">Budget</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
                <option value="economy">Economy</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium">
                Total Capacity (Beds) <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control form-control-custom"
                placeholder="Enter total number of beds"
                value={formData.totalCapacity}
                onChange={(e) => setFormData({ ...formData, totalCapacity: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        {/* Additional Classification */}
        <div className="card-custom p-4 mb-4">
          <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
            <i className="bi bi-tags me-2" style={{ color: "#10b981" }}></i>
            Additional Classification
          </h5>
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label fw-medium">PG Ownership Type</label>
              <select
                className="form-select form-select-custom"
                value={formData.ownershipType}
                onChange={(e) => setFormData({ ...formData, ownershipType: e.target.value })}
              >
                <option value="individual">Individual Owner</option>
                <option value="partnership">Partnership</option>
                <option value="company">Company Managed</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-medium">Operational Status</label>
              <select
                className="form-select form-select-custom"
                value={formData.operationalStatus}
                onChange={(e) => setFormData({ ...formData, operationalStatus: e.target.value })}
              >
                <option value="active">Active</option>
                <option value="closed">Temporarily Closed</option>
                <option value="renovation">Under Renovation</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-medium">Target Occupants</label>
              <select
                className="form-select form-select-custom"
                value={formData.targetOccupants[0]}
                onChange={(e) => setFormData({ ...formData, targetOccupants: [e.target.value] })}
              >
                <option value="students">Students</option>
                <option value="professionals">Working Professionals</option>
                <option value="families">Families</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Registration & Legal Info */}
        <div className="card-custom p-4 mb-4">
          <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
            <i className="bi bi-file-earmark-text me-2" style={{ color: "#f59e0b" }}></i>
            Registration & Legal Info
            <small className="text-muted fw-normal ms-2">(Optional but Recommended)</small>
          </h5>
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label fw-medium">Registration Number</label>
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="Enter registration number"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-medium">GST Number</label>
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="Enter GST number (optional)"
                value={formData.gstNumber}
                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-medium">Trade License Available</label>
              <div className="d-flex gap-4 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tradeLicense"
                    id="licenseYes"
                    checked={formData.tradeLicense === "yes"}
                    onChange={() => setFormData({ ...formData, tradeLicense: "yes" })}
                  />
                  <label className="form-check-label" htmlFor="licenseYes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tradeLicense"
                    id="licenseNo"
                    checked={formData.tradeLicense === "no"}
                    onChange={() => setFormData({ ...formData, tradeLicense: "no" })}
                  />
                  <label className="form-check-label" htmlFor="licenseNo">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Listing Preferences */}
        <div className="card-custom p-4 mb-4">
          <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
            <i className="bi bi-search me-2" style={{ color: "#3b82f6" }}></i>
            Search & Listing Preferences
          </h5>
          <div className="row g-4">
            <div className="col-md-12">
              <label className="form-label fw-medium">Listing Title</label>
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="e.g., Affordable Boys PG in Madhapur near Metro"
                value={formData.listingTitle}
                onChange={(e) => setFormData({ ...formData, listingTitle: e.target.value })}
              />
              <small className="text-muted">This title will appear in search results</small>
            </div>
            <div className="col-md-12">
              <label className="form-label fw-medium">Short Description</label>
              <textarea
                className="form-control form-control-custom"
                rows={3}
                placeholder="Describe your PG in brief (max 200 characters)"
                maxLength={200}
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              />
              <small className="text-muted">{formData.shortDescription.length}/200 characters</small>
            </div>
            <div className="col-md-12">
              <label className="form-label fw-medium">Highlights / Selling Points</label>
              <div className="d-flex flex-wrap gap-2">
                {["Near Metro", "Free Wi-Fi", "Power Backup", "24×7 Security", "Home Food", "AC Rooms"].map(
                  (highlight) => (
                    <span
                      key={highlight}
                      className="badge px-3 py-2"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                        borderRadius: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <i className="bi bi-check-circle me-1"></i>
                      {highlight}
                    </span>
                  ),
                )}
                <button type="button" className="btn btn-outline-primary btn-sm" style={{ borderRadius: "20px" }}>
                  <i className="bi bi-plus"></i> Add More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visibility Controls */}
        <div className="card-custom p-4 mb-4">
          <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
            <i className="bi bi-eye me-2" style={{ color: "#10b981" }}></i>
            Visibility Controls
          </h5>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showInSearch"
                  checked={formData.showInSearch}
                  onChange={(e) => setFormData({ ...formData, showInSearch: e.target.checked })}
                  style={{ width: "50px", height: "26px" }}
                />
                <label className="form-check-label ms-2" htmlFor="showInSearch">
                  <span className="fw-medium">Show PG in Search Results</span>
                  <br />
                  <small className="text-muted">Your PG will appear in tenant searches</small>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="allowFeatured"
                  checked={formData.allowFeatured}
                  onChange={(e) => setFormData({ ...formData, allowFeatured: e.target.checked })}
                  style={{ width: "50px", height: "26px" }}
                />
                <label className="form-check-label ms-2" htmlFor="allowFeatured">
                  <span className="fw-medium">Allow PG to be Featured</span>
                  <br />
                  <small className="text-muted">Your PG can be promoted in featured listings</small>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap gap-3 justify-content-end">
          <button type="button" className="btn btn-outline-secondary px-4" style={{ borderRadius: "10px" }}>
            <i className="bi bi-x-circle me-2"></i>Cancel
          </button>
          <button type="submit" className="btn btn-success-custom px-4">
            <i className="bi bi-check-circle me-2"></i>Save
          </button>
          <Link href="/my-pg/location" className="btn btn-primary-custom px-4">
            Next: Location Details<i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </form>
    </div>
  )
}
