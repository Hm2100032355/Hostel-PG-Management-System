"use client"

import { useState } from "react"

const faqs = [
  {
    q: "How do I add a new tenant?",
    a: "Go to Tenants > Add Tenant from the sidebar menu. Fill in the tenant details and assign a room.",
  },
  {
    q: "How can I track pending payments?",
    a: "Navigate to Payments & Finance > Pending Payments to see all overdue and pending rent payments.",
  },
  {
    q: "How do I update room prices?",
    a: "Go to My PG / Hostel > Room & Bed Config to update pricing for different room types.",
  },
  {
    q: "How to handle complaints?",
    a: "All complaints are listed under the Complaints section. You can update status and track resolution.",
  },
]

export default function SupportPage() {
  const [showTicketModal, setShowTicketModal] = useState(false)

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Help & Support
          </h4>
          <p className="text-muted mb-0">Get help and contact support</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }} onClick={() => setShowTicketModal(true)}>
          <i className="bi bi-ticket me-2"></i>Raise Ticket
        </button>
      </div>

      <div className="row g-4">
        {/* Contact Cards */}
        <div className="col-lg-4">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon primary mx-auto mb-3">
              <i className="bi bi-telephone"></i>
            </div>
            <h6 className="fw-bold mb-2">Phone Support</h6>
            <p className="text-muted mb-2">Mon-Sat, 9 AM - 6 PM</p>
            <a href="tel:+919876543210" className="text-primary fw-medium">
              +91 98765 43210
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon success mx-auto mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h6 className="fw-bold mb-2">Email Support</h6>
            <p className="text-muted mb-2">Response within 24 hours</p>
            <a href="mailto:support@pgmanager.com" className="text-primary fw-medium">
              support@pgmanager.com
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card-custom p-4 text-center h-100">
            <div className="stat-icon info mx-auto mb-3">
              <i className="bi bi-chat-dots"></i>
            </div>
            <h6 className="fw-bold mb-2">Live Chat</h6>
            <p className="text-muted mb-2">Available 24/7</p>
            <button className="btn btn-outline-primary btn-sm" style={{ borderRadius: "8px" }}>
              Start Chat
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="col-12">
          <div className="card-custom p-4">
            <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
              <i className="bi bi-question-circle me-2" style={{ color: "#6366f1" }}></i>
              Frequently Asked Questions
            </h5>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item border-0 mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      style={{ borderRadius: "8px", background: "#f8fafc" }}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      {showTicketModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: "16px" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Raise Support Ticket</h5>
                <button type="button" className="btn-close" onClick={() => setShowTicketModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" placeholder="Brief description of your issue" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select className="form-select">
                    <option>Technical Issue</option>
                    <option>Billing Issue</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows={4} placeholder="Describe your issue in detail"></textarea>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowTicketModal(false)}
                  style={{ borderRadius: "8px" }}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" style={{ borderRadius: "8px" }}>
                  <i className="bi bi-send me-2"></i>Submit Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
