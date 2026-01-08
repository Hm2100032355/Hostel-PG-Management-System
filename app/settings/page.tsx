"use client"

import type React from "react"

import { useState } from "react"
import { usePG } from "@/lib/pg-context"

export default function SettingsPage() {
  const { pgInfo, updatePGInfo } = usePG()
  const [activeTab, setActiveTab] = useState("profile")
  const [formData, setFormData] = useState({
    ownerName: pgInfo.ownerName,
    email: pgInfo.email,
    phone: pgInfo.phone,
    hostelName: pgInfo.hostelName,
    address: pgInfo.address,
    city: pgInfo.city,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    updatePGInfo(formData)
    alert("Settings saved successfully!")
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: "bi-person" },
    { id: "property", label: "Property", icon: "bi-building" },
    { id: "notifications", label: "Notifications", icon: "bi-bell" },
    { id: "security", label: "Security", icon: "bi-shield-lock" },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
          Settings
        </h4>
        <p className="text-muted mb-0">Manage your account and property settings</p>
      </div>

      <div className="row g-4">
        {/* Tabs */}
        <div className="col-lg-3">
          <div className="card-custom p-3">
            <nav className="d-flex flex-column gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`btn text-start d-flex align-items-center gap-2 ${activeTab === tab.id ? "btn-primary" : "btn-light"}`}
                  style={{ borderRadius: "8px" }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`bi ${tab.icon}`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-9">
          <div className="card-custom p-4">
            {activeTab === "profile" && (
              <>
                <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                  Profile Settings
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Owner Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
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
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === "property" && (
              <>
                <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                  Property Settings
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Hostel / PG Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hostelName"
                      value={formData.hostelName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === "notifications" && (
              <>
                <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                  Notification Preferences
                </h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { label: "Email Notifications", desc: "Receive updates via email" },
                    { label: "SMS Notifications", desc: "Receive updates via SMS" },
                    { label: "Payment Reminders", desc: "Get notified about pending payments" },
                    { label: "Booking Alerts", desc: "Get notified about new bookings" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between align-items-center p-3 rounded-3"
                      style={{ background: "#f8fafc" }}
                    >
                      <div>
                        <p className="mb-0 fw-medium">{item.label}</p>
                        <small className="text-muted">{item.desc}</small>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                          style={{ width: "40px", height: "20px" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "security" && (
              <>
                <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                  Security Settings
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control" placeholder="Enter current password" />
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" placeholder="Enter new password" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm new password" />
                  </div>
                </div>
              </>
            )}

            <div className="mt-4 pt-3 border-top">
              <button className="btn btn-primary" style={{ borderRadius: "10px" }} onClick={handleSave}>
                <i className="bi bi-check-circle me-2"></i>Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
