"use client"

import { useState } from "react"

const paymentHistory = [
  {
    id: 1,
    tenant: "Rahul Kumar",
    room: "Room 101",
    amount: 8000,
    paidDate: "Jan 4, 2025",
    method: "UPI",
    receipt: "RCP001",
  },
  {
    id: 2,
    tenant: "Suresh Reddy",
    room: "Room 203",
    amount: 7500,
    paidDate: "Jan 5, 2025",
    method: "Cash",
    receipt: "RCP002",
  },
  {
    id: 3,
    tenant: "Ravi Teja",
    room: "Room 301",
    amount: 7000,
    paidDate: "Jan 3, 2025",
    method: "Bank Transfer",
    receipt: "RCP003",
  },
  {
    id: 4,
    tenant: "Rahul Kumar",
    room: "Room 101",
    amount: 8000,
    paidDate: "Dec 4, 2024",
    method: "UPI",
    receipt: "RCP004",
  },
  {
    id: 5,
    tenant: "Suresh Reddy",
    room: "Room 203",
    amount: 7500,
    paidDate: "Dec 5, 2024",
    method: "Cash",
    receipt: "RCP005",
  },
]

export default function PaymentHistoryPage() {
  const [month, setMonth] = useState("january")

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Payment History
          </h4>
          <p className="text-muted mb-0">View all past payment records</p>
        </div>
        <div className="d-flex gap-2">
          <select
            className="form-select"
            style={{ borderRadius: "10px", width: "150px" }}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="january">January 2025</option>
            <option value="december">December 2024</option>
            <option value="november">November 2024</option>
          </select>
          <button className="btn btn-outline-primary" style={{ borderRadius: "10px" }}>
            <i className="bi bi-download me-2"></i>Export
          </button>
        </div>
      </div>

      <div className="card-custom p-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th>Receipt #</th>
                <th>Tenant</th>
                <th>Room</th>
                <th>Amount</th>
                <th>Paid Date</th>
                <th>Method</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td>
                    <span className="badge bg-primary-subtle text-primary px-2 py-1">{payment.receipt}</span>
                  </td>
                  <td className="fw-medium">{payment.tenant}</td>
                  <td>{payment.room}</td>
                  <td className="fw-semibold text-success">₹{payment.amount.toLocaleString()}</td>
                  <td>{payment.paidDate}</td>
                  <td>
                    <span className="badge bg-light text-dark px-2 py-1">{payment.method}</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: "6px" }}>
                      <i className="bi bi-receipt me-1"></i>Receipt
                    </button>
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
