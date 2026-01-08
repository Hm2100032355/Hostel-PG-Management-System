"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import TopHeader from "@/components/top-header"

export default function MyPGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="d-flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content flex-grow-1">
        <TopHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main
          className="p-3 p-lg-4"
          style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)", minHeight: "calc(100vh - 70px)" }}
        >
          {children}
        </main>
        <footer
          className="text-center py-3"
          style={{ background: "#1e293b", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
        >
          © 2025 Hostel / PG Management System - Secure - Reliable - Cloud-Based
        </footer>
      </div>
    </div>
  )
}
