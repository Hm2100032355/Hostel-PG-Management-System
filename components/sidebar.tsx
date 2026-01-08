"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { usePG } from "@/lib/pg-context"

const menuItems = [
  {
    title: "Dashboard",
    icon: "bi-speedometer2",
    href: "/dashboard",
    submenu: [
      { title: "Overview", href: "/dashboard" },
      { title: "Property Summary", href: "/dashboard/property-summary" },
      { title: "Occupancy Status", href: "/dashboard/occupancy" },
    ],
  },
  {
    title: "My PG / Hostel",
    icon: "bi-building",
    href: "/my-pg",
    submenu: [
      { title: "Basic PG Information", href: "/my-pg/basic-info" },
      { title: "Location Details", href: "/my-pg/location" },
      { title: "Property Structure", href: "/my-pg/structure" },
      { title: "Room & Bed Config", href: "/my-pg/rooms-config" },
      { title: "Amenities & Facilities", href: "/my-pg/amenities" },
      { title: "Photos & Media", href: "/my-pg/photos" },
    ],
  },
  {
    title: "Rooms & Beds",
    icon: "bi-door-open",
    href: "/rooms",
    submenu: [
      { title: "Room List", href: "/rooms" },
      { title: "Add / Edit Room", href: "/rooms/add" },
      { title: "Bed Configuration", href: "/rooms/beds" },
      { title: "Maintenance Status", href: "/rooms/maintenance" },
      { title: "Vacancies", href: "/rooms/vacancies" },
    ],
  },
  {
    title: "Tenants",
    icon: "bi-people",
    href: "/tenants",
    submenu: [
      { title: "Tenant List", href: "/tenants" },
      { title: "Add Tenant", href: "/tenants/add" },
      { title: "Active Tenants", href: "/tenants/active" },
      { title: "Vacated Tenants", href: "/tenants/vacated" },
    ],
  },
  {
    title: "Bookings & Requests",
    icon: "bi-clipboard-check",
    href: "/bookings",
  },
  {
    title: "Payments & Finance",
    icon: "bi-wallet2",
    href: "/payments",
    submenu: [
      { title: "Rent Collection", href: "/payments" },
      { title: "Pending Payments", href: "/payments/pending" },
      { title: "Payment History", href: "/payments/history" },
    ],
  },
  {
    title: "Complaints",
    icon: "bi-exclamation-triangle",
    href: "/complaints",
  },
  {
    title: "Notices",
    icon: "bi-megaphone",
    href: "/notices",
  },
  {
    title: "Reports",
    icon: "bi-graph-up",
    href: "/reports",
  },
  {
    title: "Settings",
    icon: "bi-gear",
    href: "/settings",
  },
  {
    title: "Support",
    icon: "bi-headset",
    href: "/support",
  },
]

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["Dashboard"])
  const { pgInfo } = usePG()

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  return (
    <>
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-lg-none"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 999 }}
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="sidebar-brand">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "45px", height: "45px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
            >
              <i className="bi bi-building text-white fs-5"></i>
            </div>
            <div>
              <h6 className="text-white fw-bold mb-0">PG Manager</h6>
              <small className="text-white opacity-50">Hostel Management</small>
            </div>
          </div>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <>
                  <a
                    href="#"
                    className={`sidebar-item ${pathname.startsWith(item.href) ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleExpand(item.title)
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                    <span className="flex-grow-1">{item.title}</span>
                    <i
                      className={`bi ${expandedItems.includes(item.title) ? "bi-chevron-down" : "bi-chevron-right"}`}
                      style={{ fontSize: "12px" }}
                    ></i>
                  </a>
                  {expandedItems.includes(item.title) && (
                    <div className="sidebar-submenu">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`sidebar-item ${pathname === sub.href ? "active" : ""}`}
                          onClick={onClose}
                        >
                          <i className="bi bi-dot"></i>
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`sidebar-item ${pathname === item.href ? "active" : ""}`}
                  onClick={onClose}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-3 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div
            className="d-flex align-items-center gap-3 p-3 rounded-3"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                fontSize: "14px",
              }}
            >
              {pgInfo.ownerName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-white mb-0 fw-medium" style={{ fontSize: "14px" }}>
                {pgInfo.ownerName}
              </p>
              <small className="text-white opacity-50">PG Owner</small>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
