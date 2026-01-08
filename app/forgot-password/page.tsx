"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1)
  const [otpValues, setOtpValues] = useState(["", "", "", ""])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = value
      setOtpValues(newOtpValues)

      if (value && index < 3) {
        const nextInput = document.getElementById(`fp-otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`fp-otp-${index - 1}`)
      prevInput?.focus()
    }
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
        style={{ maxWidth: "500px", width: "100%", zIndex: 1 }}
      >
        <div className="p-4 p-lg-5">
          <div className="text-center mb-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{ width: "70px", height: "70px", background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" }}
            >
              <i className="bi bi-key text-white" style={{ fontSize: "32px" }}></i>
            </div>
            <h3 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
              Forgot Password
            </h3>
            <p className="text-muted">Reset your account password</p>
          </div>

          {/* Progress Steps */}
          <div className="d-flex justify-content-center mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="d-flex align-items-center">
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${step >= s ? "text-white" : "text-muted"}`}
                  style={{
                    width: "36px",
                    height: "36px",
                    background: step >= s ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" : "#e5e7eb",
                    fontSize: "14px",
                  }}
                >
                  {step > s ? <i className="bi bi-check"></i> : s}
                </div>
                {s < 3 && (
                  <div
                    className="mx-2"
                    style={{
                      width: "50px",
                      height: "3px",
                      background: step > s ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" : "#e5e7eb",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="animate-fade-in">
              <h5 className="fw-semibold mb-3">Step 1: Enter Username</h5>
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
                  />
                </div>
              </div>
              <button onClick={() => setStep(2)} className="btn btn-primary-custom w-100 py-3">
                <i className="bi bi-send me-2"></i>Send OTP
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h5 className="fw-semibold mb-3">Step 2: OTP Verification</h5>
              <p className="text-muted mb-3">Enter the 4-digit OTP sent to your registered email or mobile</p>
              <div className="d-flex gap-3 justify-content-center mb-4">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    id={`fp-otp-${i}`}
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    value={otpValues[i]}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                  />
                ))}
              </div>
              <button onClick={() => setStep(3)} className="btn btn-primary-custom w-100 py-3">
                <i className="bi bi-check-circle me-2"></i>Verify OTP
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h5 className="fw-semibold mb-3">Step 3: Reset Password</h5>
              <div className="mb-3">
                <label className="form-label fw-medium">New Password</label>
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
                    placeholder="Enter new password"
                    style={{ borderRadius: "0 10px 10px 0" }}
                  />
                </div>
              </div>
              <div className="mb-4">
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
                    placeholder="Re-enter password"
                    style={{ borderRadius: "0 10px 10px 0" }}
                  />
                </div>
              </div>
              <Link href="/" className="btn btn-success-custom w-100 py-3">
                <i className="bi bi-check-circle me-2"></i>SAVE
              </Link>
            </div>
          )}

          <div className="text-center mt-4">
            <Link href="/" className="text-decoration-none" style={{ color: "#6366f1" }}>
              <i className="bi bi-arrow-left me-1"></i>Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
