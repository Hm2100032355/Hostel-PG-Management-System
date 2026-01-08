"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { usePG } from "@/lib/pg-context"

export default function Home() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const { login } = usePG()
  const router = useRouter()

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = value
      setOtpValues(newOtpValues)

      // Auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Use username as the display name (or extract name from email)
    const displayName = username.includes("@")
      ? username
          .split("@")[0]
          .split(".")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ")
      : username
    login(displayName, username)
    router.push("/dashboard")
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

      <div className="login-card animate-fade-in position-relative" style={{ zIndex: 1 }}>
        <div className="row g-0">
          <div className="col-lg-5 d-none d-lg-flex login-image-side">
            <div className="text-center">
              <i className="bi bi-building fs-1 mb-4" style={{ fontSize: "80px" }}></i>
              <h2 className="fw-bold mb-3">Hostel / PG Management</h2>
              <p className="opacity-75 mb-4">
                Manage your PG / Hostel easily from one place. Track tenants, rooms, payments, and more!
              </p>
              <div className="d-flex justify-content-center gap-4 mt-5">
                <div className="text-center">
                  <h3 className="fw-bold mb-1">500+</h3>
                  <small className="opacity-75">Properties</small>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold mb-1">10K+</h3>
                  <small className="opacity-75">Tenants</small>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold mb-1">99%</h3>
                  <small className="opacity-75">Satisfaction</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="p-4 p-lg-5">
              <div className="text-center mb-4 d-lg-none">
                <i className="bi bi-building text-primary" style={{ fontSize: "48px" }}></i>
                <h4 className="fw-bold mt-2" style={{ color: "#6366f1" }}>
                  Hostel / PG Management
                </h4>
              </div>

              <h3 className="fw-bold mb-2" style={{ color: "#1e293b" }}>
                Welcome Back!
              </h3>
              <p className="text-muted mb-4">Please login to your account</p>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="form-label fw-medium">Select Role</label>
                  <select
                    className="form-select form-select-custom"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Choose your role</option>
                    <option value="tenant">Tenant</option>
                    <option value="owner">Hostel / PG Owner</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">Username</label>
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
                      placeholder="Registered email or mobile"
                      style={{ borderRadius: "0 10px 10px 0" }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
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
                      placeholder="Enter your password"
                      style={{ borderRadius: "0 10px 10px 0" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">OTP Verification</label>
                  <div className="d-flex gap-2 align-items-center">
                    <button type="button" className="btn btn-outline-primary px-4" style={{ borderRadius: "10px" }}>
                      <i className="bi bi-send me-2"></i>Send OTP
                    </button>
                    <small className="text-muted">OTP sent to registered email or mobile</small>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">Enter OTP</label>
                  <div className="d-flex gap-2 justify-content-start">
                    {[0, 1, 2, 3].map((i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="text"
                        maxLength={1}
                        className="otp-input"
                        value={otpValues[i]}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                      />
                    ))}
                  </div>
                  <small className="text-muted">Enter 4-digit OTP number from email or mobile</small>
                </div>

                <button type="submit" className="btn btn-primary-custom w-100 py-3 mb-4">
                  <i className="bi bi-box-arrow-in-right me-2"></i>LOGIN
                </button>

                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <Link href="/forgot-password" className="text-decoration-none" style={{ color: "#6366f1" }}>
                    <i className="bi bi-key me-1"></i>Forgot Password
                  </Link>
                  <Link href="/forgot-password" className="text-decoration-none" style={{ color: "#6366f1" }}>
                    <i className="bi bi-person-question me-1"></i>Forgot Username
                  </Link>
                  <Link href="/register" className="text-decoration-none fw-medium" style={{ color: "#10b981" }}>
                    <i className="bi bi-person-plus me-1"></i>Registration
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute bottom-0 w-100 text-center py-3" style={{ zIndex: 1 }}>
        <p className="text-white mb-0 opacity-75">© 2025 Talla Consultancy Services. All rights reserved.</p>
      </div>
    </div>
  )
}
