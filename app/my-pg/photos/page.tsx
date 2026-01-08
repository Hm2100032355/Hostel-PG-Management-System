"use client"

import { useState } from "react"

export default function PhotosMediaPage() {
  const [photos, setPhotos] = useState([
    { id: 1, category: "Exterior", url: "/hostel-building-exterior.jpg" },
    { id: 2, category: "Room", url: "/hostel-room-interior.jpg" },
    { id: 3, category: "Bathroom", url: "/clean-bathroom.png" },
    { id: 4, category: "Common Area", url: "/hostel-common-area.jpg" },
  ])

  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Photos & Media
          </h4>
          <p className="text-muted mb-0">Upload and manage property photos</p>
        </div>
        <button className="btn btn-primary" style={{ borderRadius: "10px" }}>
          <i className="bi bi-upload me-2"></i>Upload Photos
        </button>
      </div>

      {/* Upload Area */}
      <div className="card-custom p-4 mb-4">
        <div
          className="border-dashed rounded-3 p-5 text-center"
          style={{ border: "2px dashed #cbd5e1", background: "#f8fafc" }}
        >
          <i className="bi bi-cloud-upload" style={{ fontSize: "48px", color: "#94a3b8" }}></i>
          <p className="text-muted mb-2 mt-3">Drag and drop photos here, or click to browse</p>
          <small className="text-muted">Supported formats: JPG, PNG, WebP (Max 5MB each)</small>
          <div className="mt-3">
            <button className="btn btn-outline-primary" style={{ borderRadius: "8px" }}>
              <i className="bi bi-folder me-2"></i>Browse Files
            </button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="card-custom p-4">
        <h5 className="fw-bold mb-4" style={{ color: "#1e293b" }}>
          <i className="bi bi-images me-2" style={{ color: "#6366f1" }}></i>
          Photo Gallery ({photos.length})
        </h5>
        <div className="row g-3">
          {photos.map((photo) => (
            <div key={photo.id} className="col-6 col-md-4 col-lg-3">
              <div className="position-relative">
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.category}
                  className="img-fluid rounded-3 w-100"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-dark px-2 py-1" style={{ fontSize: "11px" }}>
                    {photo.category}
                  </span>
                </div>
                <div className="position-absolute top-0 end-0 m-2">
                  <button className="btn btn-sm btn-danger" style={{ borderRadius: "6px", padding: "2px 6px" }}>
                    <i className="bi bi-trash" style={{ fontSize: "12px" }}></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
