"use client"

import Link from "next/link"
import { usePG } from "@/lib/pg-context"

const stats = [
  { title: "Total Rooms", value: "12", icon: "bi-door-open", color: "primary", change: "+2 this month" },
  { title: "Total Beds", value: "48", icon: "bi-lamp", color: "info", change: "" },
  { title: "Occupied Beds", value: "36", icon: "bi-person-check", color: "success", change: "75% occupancy" },
  { title: "Vacant Beds", value: "12", icon: "bi-calendar-x", color: "warning", change: "Available now" },
  { title: "Pending Requests", value: "2", icon: "bi-clock-history", color: "danger", change: "Action needed" },
  {
    title: "This Month Earnings",
    value: "₹1,80,000",
    icon: "bi-wallet2",
    color: "success",
    change: "+12% vs last month",
  },
]

const quickActions = [
  { title: "Add / Edit PG", icon: "bi-plus-circle", href: "/my-pg/basic-info" },
  { title: "Manage Rooms", icon: "bi-door-open", href: "/rooms" },
  { title: "Upload Photos", icon: "bi-image", href: "/my-pg/photos" },
  { title: "Update Vacancies", icon: "bi-calendar-check", href: "/rooms/vacancies" },
  { title: "View Bookings", icon: "bi-clipboard-check", href: "/bookings" },
  { title: "Collect Rent", icon: "bi-cash-stack", href: "/payments" },
]

const recentTenants = [
  { name: "Rahul Kumar", room: "Room 101", date: "Jan 5, 2025", status: "Active" },
  { name: "Suresh Reddy", room: "Room 203", date: "Jan 3, 2025", status: "Active" },
  { name: "Amit Sharma", room: "Room 105", date: "Dec 28, 2024", status: "Active" },
]

const notifications = [
  { text: "New tenant booking request received", icon: "bi-person-plus", color: "primary", time: "2 hours ago" },
  { text: "Rent payment received - ₹8,000", icon: "bi-cash", color: "success", time: "5 hours ago" },
  { text: "PG listing approved by admin", icon: "bi-check-circle", color: "success", time: "Yesterday" },
  { text: "Complaint resolved successfully", icon: "bi-check2-all", color: "info", time: "2 days ago" },
]

const complaints = [
  { issue: "Water Issue", room: "Room 102", status: "Open", priority: "High" },
  { issue: "Wi-Fi Issue", room: "Room 201", status: "In Progress", priority: "Medium" },
]

export default function DashboardPage() {
  const { pgInfo } = usePG()

  return (
    <div className="animate-fade-in">
      {/* Welcome Banner */}
      <div className="welcome-banner mb-4">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-2">Welcome, {pgInfo.ownerName}!</h2>
            <p className="opacity-75 mb-0">
              Manage your PG / hostel easily from one place. Track tenants, rooms, payments, and more!
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <Link href="/my-pg/basic-info" className="btn btn-light px-4" style={{ borderRadius: "10px" }}>
              <i className="bi bi-gear me-2"></i>Manage PG
            </Link>
          </div>
        </div>
      </div>

      {/* Property Overview */}
      <div className="card-custom p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-3 mb-3 mb-md-0">
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{
                width: "100%",
                height: "150px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              <i className="bi bi-building text-white" style={{ fontSize: "48px" }}></i>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
              <h4 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                {pgInfo.hostelName}
              </h4>
              <span
                className="badge"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                }}
              >
                <i className="bi bi-check-circle me-1"></i>Active
              </span>
            </div>
            <p className="text-muted mb-2">
              <i className="bi bi-geo-alt me-1"></i>
              {pgInfo.city}
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary-subtle text-primary px-3 py-2" style={{ borderRadius: "10px" }}>
                <i className="bi bi-gender-male me-1"></i>Boys PG
              </span>
              <span className="badge bg-info-subtle text-info px-3 py-2" style={{ borderRadius: "10px" }}>
                <i className="bi bi-star me-1"></i>Premium
              </span>
              <span className="badge bg-success-subtle text-success px-3 py-2" style={{ borderRadius: "10px" }}>
                <i className="bi bi-wifi me-1"></i>Free Wi-Fi
              </span>
              <span className="badge bg-warning-subtle text-warning px-3 py-2" style={{ borderRadius: "10px" }}>
                <i className="bi bi-cup-hot me-1"></i>Food Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-6 col-lg-4 col-xl-2">
            <div className="stat-card h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className={`stat-icon ${stat.color}`}>
                  <i className={`bi ${stat.icon}`}></i>
                </div>
              </div>
              <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
                {stat.value}
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                {stat.title}
              </p>
              {stat.change && (
                <small
                  className={`text-${stat.color === "danger" ? "danger" : "success"}`}
                  style={{ fontSize: "11px" }}
                >
                  {stat.change}
                </small>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card-custom p-4 mb-4">
        <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
          <i className="bi bi-lightning-charge me-2" style={{ color: "#f59e0b" }}></i>
          Quick Actions
        </h5>
        <div className="row g-3">
          {quickActions.map((action, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <Link
                href={action.href}
                className="quick-action-btn h-100 d-flex flex-column align-items-center justify-content-center"
              >
                <i className={`bi ${action.icon}`}></i>
                <span className="fw-medium" style={{ fontSize: "13px" }}>
                  {action.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {/* Vacancy Status */}
        <div className="col-lg-4">
          <div className="card-custom p-4 h-100">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-calendar-check me-2" style={{ color: "#10b981" }}></i>
              Vacancy Status
            </h5>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted">Occupancy Rate</span>
                <span className="fw-bold" style={{ color: "#10b981" }}>
                  75%
                </span>
              </div>
              <div className="progress-custom">
                <div className="progress-bar-custom" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded-3"
                style={{ background: "#d1fae5" }}
              >
                <div>
                  <p className="mb-0 fw-medium" style={{ color: "#059669" }}>
                    2-Sharing
                  </p>
                  <small className="text-muted">Available</small>
                </div>
                <span className="badge bg-success px-3 py-2" style={{ borderRadius: "10px" }}>
                  3 Beds
                </span>
              </div>
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded-3"
                style={{ background: "#dbeafe" }}
              >
                <div>
                  <p className="mb-0 fw-medium" style={{ color: "#2563eb" }}>
                    3-Sharing
                  </p>
                  <small className="text-muted">Available</small>
                </div>
                <span className="badge bg-primary px-3 py-2" style={{ borderRadius: "10px" }}>
                  5 Beds
                </span>
              </div>
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded-3"
                style={{ background: "#fee2e2" }}
              >
                <div>
                  <p className="mb-0 fw-medium" style={{ color: "#dc2626" }}>
                    4-Sharing
                  </p>
                  <small className="text-muted">Fully Occupied</small>
                </div>
                <span className="badge bg-danger px-3 py-2" style={{ borderRadius: "10px" }}>
                  Full
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Tenants */}
        <div className="col-lg-4">
          <div className="card-custom p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <i className="bi bi-people me-2" style={{ color: "#6366f1" }}></i>
                Tenant Overview
              </h5>
              <Link href="/tenants" className="btn btn-sm btn-outline-primary" style={{ borderRadius: "8px" }}>
                View All
              </Link>
            </div>
            <div className="d-flex gap-3 mb-4">
              <div className="text-center flex-grow-1 p-3 rounded-3" style={{ background: "#f1f5f9" }}>
                <h4 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  36
                </h4>
                <small className="text-muted">Total</small>
              </div>
              <div className="text-center flex-grow-1 p-3 rounded-3" style={{ background: "#d1fae5" }}>
                <h4 className="fw-bold mb-0" style={{ color: "#059669" }}>
                  34
                </h4>
                <small className="text-muted">Active</small>
              </div>
              <div className="text-center flex-grow-1 p-3 rounded-3" style={{ background: "#fee2e2" }}>
                <h4 className="fw-bold mb-0" style={{ color: "#dc2626" }}>
                  2
                </h4>
                <small className="text-muted">Vacated</small>
              </div>
            </div>
            <h6 className="fw-semibold mb-3" style={{ color: "#64748b" }}>
              Recent Tenants
            </h6>
            <div className="d-flex flex-column gap-3">
              {recentTenants.map((tenant, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-3 p-2 rounded-3"
                  style={{ background: "#f8fafc" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? "#6366f1" : "#10b981"} 0%, ${index % 2 === 0 ? "#8b5cf6" : "#059669"} 100%)`,
                      fontSize: "14px",
                    }}
                  >
                    {tenant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 fw-medium" style={{ fontSize: "14px", color: "#1e293b" }}>
                      {tenant.name}
                    </p>
                    <small className="text-muted">
                      {tenant.room} - {tenant.date}
                    </small>
                  </div>
                  <span className="vacancy-badge available">{tenant.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications & Complaints */}
        <div className="col-lg-4">
          <div className="card-custom p-4 mb-4">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-bell me-2" style={{ color: "#f59e0b" }}></i>
              Notifications
            </h5>
            <div className="d-flex flex-column gap-3">
              {notifications.map((notif, index) => (
                <div key={index} className="d-flex gap-3 align-items-start">
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center bg-${notif.color}-subtle`}
                    style={{ width: "36px", height: "36px", minWidth: "36px" }}
                  >
                    <i className={`bi ${notif.icon} text-${notif.color}`} style={{ fontSize: "14px" }}></i>
                  </div>
                  <div>
                    <p className="mb-0" style={{ fontSize: "13px", color: "#1e293b" }}>
                      {notif.text}
                    </p>
                    <small className="text-muted">{notif.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-custom p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <i className="bi bi-exclamation-triangle me-2" style={{ color: "#ef4444" }}></i>
                Open Complaints
              </h5>
              <Link
                href="/complaints"
                className="badge bg-danger-subtle text-danger px-3 py-2"
                style={{ borderRadius: "10px", textDecoration: "none" }}
              >
                2
              </Link>
            </div>
            <div className="d-flex flex-column gap-3">
              {complaints.map((complaint, index) => (
                <div
                  key={index}
                  className="p-3 rounded-3"
                  style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-medium" style={{ color: "#dc2626", fontSize: "14px" }}>
                      {complaint.issue}
                    </span>
                    <span
                      className={`badge ${complaint.status === "Open" ? "bg-danger" : "bg-warning"} px-2 py-1`}
                      style={{ fontSize: "11px" }}
                    >
                      {complaint.status}
                    </span>
                  </div>
                  <small className="text-muted">
                    {complaint.room} - {complaint.priority} Priority
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Requests & Payments */}
      <div className="row g-4 mt-2">
        <div className="col-lg-6">
          <div className="card-custom p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <i className="bi bi-clipboard-check me-2" style={{ color: "#3b82f6" }}></i>
                Booking & Visit Requests
              </h5>
              <Link href="/bookings" className="btn btn-sm btn-outline-primary" style={{ borderRadius: "8px" }}>
                View All
              </Link>
            </div>
            <div className="row g-3">
              <div className="col-4">
                <div
                  className="text-center p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}
                >
                  <h3 className="fw-bold mb-1" style={{ color: "#2563eb" }}>
                    2
                  </h3>
                  <small className="text-muted">New Bookings</small>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="text-center p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}
                >
                  <h3 className="fw-bold mb-1" style={{ color: "#d97706" }}>
                    3
                  </h3>
                  <small className="text-muted">Visit Requests</small>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="text-center p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" }}
                >
                  <h3 className="fw-bold mb-1" style={{ color: "#059669" }}>
                    12
                  </h3>
                  <small className="text-muted">Approved</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card-custom p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                <i className="bi bi-wallet2 me-2" style={{ color: "#10b981" }}></i>
                Earnings & Payments
              </h5>
              <Link href="/payments" className="btn btn-sm btn-outline-success" style={{ borderRadius: "8px" }}>
                View All
              </Link>
            </div>
            <div className="row g-3">
              <div className="col-6">
                <div
                  className="p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" }}
                >
                  <small className="text-muted">This Month Collection</small>
                  <h4 className="fw-bold mb-0" style={{ color: "#059669" }}>
                    ₹1,80,000
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}
                >
                  <small className="text-muted">Pending Payments</small>
                  <h4 className="fw-bold mb-0" style={{ color: "#dc2626" }}>
                    ₹8,000
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}
                >
                  <small className="text-muted">Advance Received</small>
                  <h4 className="fw-bold mb-0" style={{ color: "#2563eb" }}>
                    ₹15,000
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="p-3 rounded-3"
                  style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)" }}
                >
                  <small className="text-muted">Total Earnings</small>
                  <h4 className="fw-bold mb-0" style={{ color: "#7c3aed" }}>
                    ₹12,50,000
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
