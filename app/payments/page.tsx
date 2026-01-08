"use client"

import { useState } from "react"
import Link from "next/link"

const payments = [
  {
    id: 1,
    tenant: "Rahul Kumar",
    room: "Room 101",
    amount: 8000,
    dueDate: "Jan 5, 2025",
    status: "Paid",
    paidDate: "Jan 4, 2025",
  },
  {
    id: 2,
    tenant: "Suresh Reddy",
    room: "Room 203",
    amount: 7500,
    dueDate: "Jan 5, 2025",
    status: "Paid",
    paidDate: "Jan 5, 2025",
  },
  {
    id: 3,
    tenant: "Amit Sharma",
    room: "Room 105",
    amount: 8000,
    dueDate: "Jan 5, 2025",
    status: "Pending",
    paidDate: null,
  },
  {
    id: 4,
    tenant: "Vijay Kumar",
    room: "Room 202",
    amount: 6500,
    dueDate: "Jan 5, 2025",
    status: "Overdue",
    paidDate: null,
  },
  {
    id: 5,
    tenant: "Ravi Teja",
    room: "Room 301",
    amount: 7000,
    dueDate: "Jan 5, 2025",
    status: "Paid",
    paidDate: "Jan 3, 2025",
  },
]

export default function PaymentsPage() {
  const [filter, setFilter] = useState("all")

  const filteredPayments = payments.filter((p) => filter === "all" || p.status.toLowerCase() === filter)

  const totalCollected = payments.filter((p) => p.status === "Paid").reduce((sum, p) => sum + p.amount, 0)
  const totalPending = payments.filter((p) => p.status === "Pending").reduce((sum, p) => sum + p.amount, 0)
  const totalOverdue = payments.filter((p) => p.status === "Overdue").reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Rent Collection
          </h4>
          <p className="text-muted mb-0">Track and manage rent payments</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/payments/pending" className="btn btn-outline-warning" style={{ borderRadius: "10px" }}>
            <i className="bi bi-clock me-2"></i>Pending
          </Link>
          <Link href="/payments/history" className="btn btn-outline-primary" style={{ borderRadius: "10px" }}>
            <i className="bi bi-clock-history me-2"></i>History
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card-custom p-4" style={{ background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Total Collected</p>
                <h3 className="fw-bold mb-0" style={{ color: "#059669" }}>
                  ₹{totalCollected.toLocaleString()}
                </h3>
              </div>
              <div className="stat-icon success">
                <i className="bi bi-check-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-4" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Pending</p>
                <h3 className="fw-bold mb-0" style={{ color: "#d97706" }}>
                  ₹{totalPending.toLocaleString()}
                </h3>
              </div>
              <div className="stat-icon warning">
                <i className="bi bi-clock"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-4" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">Overdue</p>
                <h3 className="fw-bold mb-0" style={{ color: "#dc2626" }}>
                  ₹{totalOverdue.toLocaleString()}
                </h3>
              </div>
              <div className="stat-icon danger">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card-custom p-4 mb-4">
        <div className="d-flex flex-wrap gap-2">
          {["all", "paid", "pending", "overdue"].map((f) => (
            <button
              key={f}
              className={`btn btn-sm ${filter === f ? "btn-primary" : "btn-outline-secondary"}`}
              style={{ borderRadius: "20px" }}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Payments Table */}
      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Tenant</th>
                <th>Room</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Paid Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className="fw-medium">{payment.tenant}</td>
                  <td>{payment.room}</td>
                  <td className="fw-semibold">₹{payment.amount.toLocaleString()}</td>
                  <td>{payment.dueDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        payment.status === "Paid"
                          ? "bg-success-subtle text-success"
                          : payment.status === "Pending"
                            ? "bg-warning-subtle text-warning"
                            : "bg-danger-subtle text-danger"
                      } px-2 py-1`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td>{payment.paidDate || "-"}</td>
                  <td>
                    {payment.status !== "Paid" && (
                      <button className="btn btn-sm btn-success" style={{ borderRadius: "6px" }}>
                        <i className="bi bi-check me-1"></i>Mark Paid
                      </button>
                    )}
                    {payment.status === "Paid" && (
                      <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                        <i className="bi bi-receipt"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
