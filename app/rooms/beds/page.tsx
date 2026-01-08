"use client"

const bedConfig = [
  {
    room: "Room 101",
    type: "2-Sharing",
    beds: [
      { id: "A", status: "Occupied", tenant: "Rahul Kumar" },
      { id: "B", status: "Vacant", tenant: null },
    ],
  },
  {
    room: "Room 102",
    type: "3-Sharing",
    beds: [
      { id: "A", status: "Occupied", tenant: "Suresh Reddy" },
      { id: "B", status: "Occupied", tenant: "Amit Sharma" },
      { id: "C", status: "Vacant", tenant: null },
    ],
  },
  {
    room: "Room 201",
    type: "2-Sharing",
    beds: [
      { id: "A", status: "Occupied", tenant: "Vijay Kumar" },
      { id: "B", status: "Occupied", tenant: "Ravi Teja" },
    ],
  },
  {
    room: "Room 202",
    type: "4-Sharing",
    beds: [
      { id: "A", status: "Occupied", tenant: "Kiran" },
      { id: "B", status: "Vacant", tenant: null },
      { id: "C", status: "Vacant", tenant: null },
      { id: "D", status: "Occupied", tenant: "Mohan" },
    ],
  },
]

export default function BedConfigurationPage() {
  return (
    <div className="animate-fade-in">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: "#1e293b" }}>
            Bed Configuration
          </h4>
          <p className="text-muted mb-0">View and manage bed assignments</p>
        </div>
      </div>

      <div className="row g-4">
        {bedConfig.map((room, index) => (
          <div key={index} className="col-md-6">
            <div className="card-custom p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h6 className="fw-bold mb-0" style={{ color: "#1e293b" }}>
                    {room.room}
                  </h6>
                  <small className="text-muted">{room.type}</small>
                </div>
                <span className="badge bg-primary-subtle text-primary px-2 py-1">
                  {room.beds.filter((b) => b.status === "Occupied").length}/{room.beds.length} Occupied
                </span>
              </div>
              <div className="row g-2">
                {room.beds.map((bed) => (
                  <div key={bed.id} className="col-6">
                    <div
                      className={`p-3 rounded-3 text-center ${bed.status === "Occupied" ? "bg-success-subtle" : "bg-warning-subtle"}`}
                      style={{ border: `2px solid ${bed.status === "Occupied" ? "#10b981" : "#f59e0b"}` }}
                    >
                      <i
                        className={`bi ${bed.status === "Occupied" ? "bi-person-fill" : "bi-person"} fs-4`}
                        style={{ color: bed.status === "Occupied" ? "#059669" : "#d97706" }}
                      ></i>
                      <p className="mb-0 fw-medium" style={{ fontSize: "14px" }}>
                        Bed {bed.id}
                      </p>
                      <small className={bed.status === "Occupied" ? "text-success" : "text-warning"}>
                        {bed.tenant || "Vacant"}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
