"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface PGInfo {
  hostelName: string
  ownerName: string
  email: string
  phone: string
  address: string
  city: string
}

interface PGContextType {
  pgInfo: PGInfo
  updatePGInfo: (info: Partial<PGInfo>) => void
  logout: () => void
  login: (userName: string, email: string) => void
  isLoggedIn: boolean
}

const defaultPGInfo: PGInfo = {
  hostelName: "Sunrise Men's PG",
  ownerName: "",
  email: "",
  phone: "",
  address: "Plot No. 123, Tech Park Road",
  city: "Madhapur, Hyderabad",
}

const PGContext = createContext<PGContextType | undefined>(undefined)

export function PGProvider({ children }: { children: ReactNode }) {
  const [pgInfo, setPGInfo] = useState<PGInfo>(defaultPGInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = sessionStorage.getItem("pgUserInfo")
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        setPGInfo((prev) => ({ ...prev, ...userData }))
        setIsLoggedIn(true)
      }
    }
  }, [])

  const updatePGInfo = (info: Partial<PGInfo>) => {
    setPGInfo((prev) => {
      const updated = { ...prev, ...info }
      // Save to sessionStorage
      if (typeof window !== "undefined") {
        sessionStorage.setItem("pgUserInfo", JSON.stringify(updated))
      }
      return updated
    })
  }

  const login = (userName: string, email: string) => {
    const userData = { ownerName: userName, email: email }
    setPGInfo((prev) => ({ ...prev, ...userData }))
    setIsLoggedIn(true)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pgUserInfo", JSON.stringify({ ...pgInfo, ...userData }))
    }
  }

  const logout = () => {
    setPGInfo(defaultPGInfo)
    setIsLoggedIn(false)
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("pgUserInfo")
    }
  }

  return <PGContext.Provider value={{ pgInfo, updatePGInfo, logout, login, isLoggedIn }}>{children}</PGContext.Provider>
}

export function usePG() {
  const context = useContext(PGContext)
  if (!context) {
    throw new Error("usePG must be used within a PGProvider")
  }
  return context
}
