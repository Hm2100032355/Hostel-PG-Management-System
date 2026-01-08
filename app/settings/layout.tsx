"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import TopHeader from "@/components/top-header"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="d-flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <TopHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="content-area">{children}</main>
      </div>
    </div>
  )
}
