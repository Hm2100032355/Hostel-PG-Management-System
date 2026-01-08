"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const tenants = [
  {
    id: 1,
    name: "Rahul Kumar",
    room: "101",
    bed: "A",
    mobile: "9876543210",
    email: "rahul@email.com",
    joinDate: "Jan 5, 2025",
    rent: "₹8,000",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    name: "Suresh Reddy",
    room: "203",
    bed: "B",
    mobile: "9876543211",
    email: "suresh@email.com",
    joinDate: "Jan 3, 2025",
    rent: "₹7,500",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: 3,
    name: "Amit Sharma",
    room: "105",
    bed: "A",
    mobile: "9876543212",
    email: "amit@email.com",
    joinDate: "Dec 28, 2024",
    rent: "₹9,000",
    status: "Active",
    paymentStatus: "Pending",
  },
  {
    id: 4,
    name: "Pradeep Singh",
    room: "202",
    bed: "C",
    mobile: "9876543213",
    email: "pradeep@email.com",
    joinDate: "Dec 15, 2024",
    rent: "₹7,500",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    room: "301",
    bed: "A",
    mobile: "9876543214",
    email: "vikram@email.com",
    joinDate: "Dec 10, 2024",
    rent: "₹8,500",
    status: "Active",
    paymentStatus: "Overdue",
  },
  {
    id: 6,
    name: "Kiran Patel",
    room: "102",
    bed: "B",
    mobile: "9876543215",
    email: "kiran@email.com",
    joinDate: "Nov 20, 2024",
    rent: "₹8,000",
    status: "Vacated",
    paymentStatus: "Paid",
  },
]

export default function TenantsPage() {
  const dropdownRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const initDropdowns = async () => {
      if (typeof window !== "undefined") {
        const bootstrap = await import("bootstrap")
        dropdownRefs.current.forEach((ref) => {
          if (ref) {
            new bootstrap.Dropdown(ref)
          }
        })
      }
    }
    initDropdowns()
  }, [])

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Tenants
          </h4>
          <p className="text-muted mb-0">Manage all your tenants in one place</p>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <button className="btn btn-outline-secondary" style={{ borderRadius: "10px" }}>
            <i className="bi bi-download me-2"></i>Export
          </button>
          <Link href="/tenants/add" className="btn btn-primary-custom">
            <i className="bi bi-plus-circle me-2"></i>Add Tenant
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon primary">
                <i className="bi bi-people"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  36
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Total Tenants
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon success">
                <i className="bi bi-person-check"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  34
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Active Tenants
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon warning">
                <i className="bi bi-person-x"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  2
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Vacated This Month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon danger">
                <i className="bi bi-exclamation-circle"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                  3
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                  Pending Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card-custom p-4 mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-3">
            <label className="form-label fw-medium">Search</label>
            <div className="input-group">
              <span
                className="input-group-text bg-light border-end-0"
                style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
              >
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-custom border-start-0"
                placeholder="Search by name, room..."
                style={{ borderRadius: "0 10px 10px 0" }}
              />
            </div>
          </div>
          <div className="col-md-2">
            <label className="form-label fw-medium">Status</label>
            <select className="form-select form-select-custom">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="vacated">Vacated</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label fw-medium">Payment</label>
            <select className="form-select form-select-custom">
              <option value="">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label fw-medium">Floor</label>
            <select className="form-select form-select-custom">
              <option value="">All Floors</option>
              <option value="1">Floor 1</option>
              <option value="2">Floor 2</option>
              <option value="3">Floor 3</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-primary w-100" style={{ borderRadius: "10px" }}>
              <i className="bi bi-funnel me-2"></i>Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="card-custom overflow-hidden">
        <div className="table-responsive">
          <table className="table table-custom mb-0">
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Room/Bed</th>
                <th>Contact</th>
                <th>Join Date</th>
                <th>Rent</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant, index) => (
                <tr key={tenant.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: `linear-gradient(135deg, ${tenant.status === "Active" ? "#6366f1" : "#94a3b8"} 0%, ${tenant.status === "Active" ? "#8b5cf6" : "#64748b"} 100%)`,
                          fontSize: "14px",
                        }}
                      >
                        {tenant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="mb-0 fw-medium" style={{ color: "#1e293b" }}>
                          {tenant.name}
                        </p>
                        <small className="text-muted">ID: TN{tenant.id.toString().padStart(4, "0")}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="fw-medium" style={{ color: "#1e293b" }}>
                      Room {tenant.room}
                    </span>
                    <br />
                    <small className="text-muted">Bed {tenant.bed}</small>
                  </td>
                  <td>
                    <span style={{ fontSize: "14px" }}>{tenant.mobile}</span>
                    <br />
                    <small className="text-muted">{tenant.email}</small>
                  </td>
                  <td style={{ fontSize: "14px" }}>{tenant.joinDate}</td>
                  <td className="fw-medium" style={{ color: "#1e293b" }}>
                    {tenant.rent}
                  </td>
                  <td>
                    <span className={`vacancy-badge ${tenant.status === "Active" ? "available" : "reserved"}`}>
                      {tenant.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        tenant.paymentStatus === "Paid"
                          ? "bg-success-subtle text-success"
                          : tenant.paymentStatus === "Pending"
                            ? "bg-warning-subtle text-warning"
                            : "bg-danger-subtle text-danger"
                      }`}
                      style={{ borderRadius: "10px" }}
                    >
                      {tenant.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        ref={(el) => {
                          dropdownRefs.current[index] = el
                        }}
                        className="btn btn-light btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ borderRadius: "8px" }}
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-eye me-2"></i>View Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-pencil me-2"></i>Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-cash me-2"></i>Collect Rent
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-file-earmark me-2"></i>Documents
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="bi bi-person-x me-2"></i>Mark Vacated
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className="d-flex flex-wrap justify-content-between align-items-center p-4"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
            Showing 1-6 of 36 tenants
          </p>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#" style={{ borderRadius: "8px 0 0 8px" }}>
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link"
                  href="#"
                  style={{ background: "var(--primary-color)", borderColor: "var(--primary-color)" }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" style={{ borderRadius: "0 8px 8px 0" }}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
