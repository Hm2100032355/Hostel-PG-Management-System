"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [otpSent, setOtpSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/")
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = value
      setOtpValues(newOtpValues)

      if (value && index < 3) {
        const nextInput = document.getElementById(`reg-otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`reg-otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSendOtp = () => {
    setOtpSent(true)
  }

  return (
    <div className="login-page position-relative">
      <div className="floating-shapes">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${i * 10 + 5}%`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div
        className="card-custom animate-fade-in position-relative"
        style={{ maxWidth: "550px", width: "100%", zIndex: 1 }}
      >
        <div className="p-4 p-lg-5">
          <div className="text-center mb-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
            >
              <i className="bi bi-person-plus text-white" style={{ fontSize: "32px" }}></i>
            </div>
            <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
              Create Account
            </h3>
            <p className="text-muted">Register as a new user</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium">Full Name</label>
              <div className="input-group">
                <span
                  className="input-group-text bg-light border-end-0"
                  style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                >
                  <i className="bi bi-person text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-custom border-start-0"
                  placeholder="Enter your full name"
                  style={{ borderRadius: "0 10px 10px 0" }}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Email</label>
              <div className="input-group">
                <span
                  className="input-group-text bg-light border-end-0"
                  style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                >
                  <i className="bi bi-envelope text-muted"></i>
                </span>
                <input
                  type="email"
                  className="form-control form-control-custom border-start-0"
                  placeholder="Enter your email"
                  style={{ borderRadius: "0 10px 10px 0" }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Mobile Number</label>
              <div className="input-group">
                <span
                  className="input-group-text bg-light border-end-0"
                  style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                >
                  <i className="bi bi-phone text-muted"></i>
                </span>
                <input
                  type="tel"
                  className="form-control form-control-custom border-start-0"
                  placeholder="Enter your mobile number"
                  style={{ borderRadius: "0 10px 10px 0" }}
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Username</label>
              <div className="input-group">
                <span
                  className="input-group-text bg-light border-end-0"
                  style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                >
                  <i className="bi bi-at text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-custom border-start-0"
                  placeholder="Choose a username"
                  style={{ borderRadius: "0 10px 10px 0" }}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-medium">Password</label>
                <div className="input-group">
                  <span
                    className="input-group-text bg-light border-end-0"
                    style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                  >
                    <i className="bi bi-lock text-muted"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-custom border-start-0"
                    placeholder="Password"
                    style={{ borderRadius: "0 10px 10px 0" }}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-medium">Confirm Password</label>
                <div className="input-group">
                  <span
                    className="input-group-text bg-light border-end-0"
                    style={{ borderRadius: "10px 0 0 10px", border: "2px solid #e5e7eb" }}
                  >
                    <i className="bi bi-lock-fill text-muted"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-custom border-start-0"
                    placeholder="Confirm"
                    style={{ borderRadius: "0 10px 10px 0" }}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">OTP Verification</label>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <button
                  type="button"
                  className={`btn ${otpSent ? "btn-success" : "btn-outline-primary"} px-4`}
                  style={{ borderRadius: "10px" }}
                  onClick={handleSendOtp}
                >
                  <i className={`bi ${otpSent ? "bi-check-circle" : "bi-send"} me-2`}></i>
                  {otpSent ? "OTP Sent" : "Send OTP"}
                </button>
                <div className="d-flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      id={`reg-otp-${i}`}
                      type="text"
                      maxLength={1}
                      className="otp-input"
                      style={{ width: "45px", height: "50px" }}
                      value={otpValues[i]}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success-custom w-100 py-3 mb-3">
              <i className="bi bi-check-circle me-2"></i>REGISTER
            </button>

            <p className="text-center text-muted mb-0">
              Already have an account?
              <Link href="/" className="text-decoration-none fw-medium ms-1" style={{ color: "#6366f1" }}>
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
