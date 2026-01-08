"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { usePG } from "@/lib/pg-context"

interface TopHeaderProps {
  onMenuToggle: () => void
}

export default function TopHeader({ onMenuToggle }: TopHeaderProps) {
  const { pgInfo, logout } = usePG()
  const router = useRouter()
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const propertyDropdownRef = useRef<HTMLDivElement>(null)
  const profileDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (propertyDropdownRef.current && !propertyDropdownRef.current.contains(event.target as Node)) {
        setShowPropertyDropdown(false)
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const ownerInitials = pgInfo.ownerName
    ? pgInfo.ownerName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U"

  return (
    <header className="top-header d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light d-lg-none" onClick={onMenuToggle} style={{ borderRadius: "10px" }}>
          <i className="bi bi-list fs-5"></i>
        </button>
        <div className="d-none d-md-block">
          <h5 className="mb-0 fw-semibold" style={{ color: "#1e293b" }}>
            Hostel / PG Management System
          </h5>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 gap-md-3">
        <button
          className="btn btn-light position-relative"
          style={{ borderRadius: "12px", width: "44px", height: "44px" }}
        >
          <i className="bi bi-bell" style={{ color: "#64748b" }}></i>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "10px" }}
          >
            3
          </span>
        </button>

        <div className="position-relative" ref={propertyDropdownRef}>
          <button
            className="btn btn-light d-flex align-items-center gap-2"
            type="button"
            onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
            style={{ borderRadius: "12px", padding: "8px 12px" }}
          >
            <i className="bi bi-building" style={{ color: "#6366f1" }}></i>
            <span className="d-none d-md-inline" style={{ color: "#1e293b" }}>
              {pgInfo.hostelName}
            </span>
            <i className="bi bi-chevron-down" style={{ fontSize: "12px" }}></i>
          </button>
          {showPropertyDropdown && (
            <ul
              className="dropdown-menu show dropdown-menu-end"
              style={{ position: "absolute", top: "100%", right: 0, marginTop: "4px" }}
            >
              <li>
                <a className="dropdown-item" href="#" onClick={() => setShowPropertyDropdown(false)}>
                  <i className="bi bi-building me-2"></i>
                  {pgInfo.hostelName}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => setShowPropertyDropdown(false)}>
                  <i className="bi bi-building me-2"></i>Green Valley Hostel
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-primary" href="#" onClick={() => setShowPropertyDropdown(false)}>
                  <i className="bi bi-plus-circle me-2"></i>Add New Property
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="position-relative" ref={profileDropdownRef}>
          <button
            className="btn btn-light d-flex align-items-center gap-2"
            type="button"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            style={{ borderRadius: "12px", padding: "8px 12px" }}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                fontSize: "12px",
              }}
            >
              {ownerInitials}
            </div>
            <span className="d-none d-lg-inline" style={{ color: "#1e293b" }}>
              {pgInfo.ownerName || "User"}
            </span>
            <i className="bi bi-chevron-down" style={{ fontSize: "12px" }}></i>
          </button>
          {showProfileDropdown && (
            <ul
              className="dropdown-menu show dropdown-menu-end"
              style={{ position: "absolute", top: "100%", right: 0, marginTop: "4px", minWidth: "200px" }}
            >
              <li className="px-3 py-2 border-bottom">
                <div className="fw-semibold">{pgInfo.ownerName || "User"}</div>
                <small className="text-muted">{pgInfo.email || "user@example.com"}</small>
              </li>
              <li>
                <Link className="dropdown-item py-2" href="/settings" onClick={() => setShowProfileDropdown(false)}>
                  <i className="bi bi-person me-2"></i>Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-2" href="/settings" onClick={() => setShowProfileDropdown(false)}>
                  <i className="bi bi-gear me-2"></i>Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item py-2 text-danger fw-medium" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-2"></i>Logout
                </button>
              </li>
            </ul>
          )}
        </div>

        <button
          className="btn btn-outline-danger d-flex align-items-center gap-2"
          onClick={handleLogout}
          style={{ borderRadius: "12px", padding: "8px 16px" }}
          title="Logout"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span className="d-none d-md-inline">Logout</span>
        </button>
      </div>
    </header>
  )
}
