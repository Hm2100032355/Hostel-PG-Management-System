"use client"

import { useState } from "react"

const amenityCategories = [
  {
    title: "Basic Amenities",
    items: [
      { name: "Wi-Fi", icon: "bi-wifi", active: true },
      { name: "Power Backup", icon: "bi-lightning", active: true },
      { name: "Water Supply", icon: "bi-droplet", active: true },
      { name: "Parking", icon: "bi-car-front", active: true },
    ],
  },
  {
    title: "Room Amenities",
    items: [
      { name: "AC", icon: "bi-snow", active: true },
      { name: "Attached Bathroom", icon: "bi-door-open", active: true },
      { name: "Wardrobe", icon: "bi-box", active: true },
      { name: "Study Table", icon: "bi-table", active: false },
    ],
  },
  {
    title: "Food & Kitchen",
    items: [
      { name: "Meals Included", icon: "bi-cup-hot", active: true },
      { name: "Kitchen Access", icon: "bi-house", active: false },
      { name: "Refrigerator", icon: "bi-box-seam", active: true },
      { name: "Microwave", icon: "bi-broadcast", active: false },
    ],
  },
  {
    title: "Security & Safety",
    items: [
      { name: "CCTV", icon: "bi-camera-video", active: true },
      { name: "Security Guard", icon: "bi-shield-check", active: true },
      { name: "Biometric Entry", icon: "bi-fingerprint", active: false },
      { name: "Fire Safety", icon: "bi-fire", active: true },
    ],
  },
]

export default function AmenitiesPage() {
  const [amenities, setAmenities] = useState(amenityCategories)

  const toggleAmenity = (catIndex: number, itemIndex: number) => {
    const updated = [...amenities]
    updated[catIndex].items[itemIndex].active = !updated[catIndex].items[itemIndex].active
    setAmenities(updated)
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
          Amenities & Facilities
        </h4>
        <p className="text-muted mb-0">Manage available amenities at your property</p>
      </div>

      <div className="row g-4">
        {amenities.map((category, catIndex) => (
          <div key={catIndex} className="col-md-6">
            <div className="card-custom p-4 h-100">
              <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
                {category.title}
              </h5>
              <div className="row g-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="col-6">
                    <div
                      className={`p-3 rounded-3 d-flex align-items-center gap-3 cursor-pointer ${item.active ? "bg-success-subtle" : "bg-light"}`}
                      style={{ cursor: "pointer", border: `2px solid ${item.active ? "#10b981" : "#e2e8f0"}` }}
                      onClick={() => toggleAmenity(catIndex, itemIndex)}
                    >
                      <i className={`bi ${item.icon} fs-5`} style={{ color: item.active ? "#059669" : "#94a3b8" }}></i>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-medium" style={{ fontSize: "14px" }}>
                          {item.name}
                        </p>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={item.active}
                          onChange={() => toggleAmenity(catIndex, itemIndex)}
                          style={{ width: "36px", height: "18px" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="btn btn-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-check-circle me-2"></i>Save Amenities
        </button>
      </div>
    </div>
  )
}
