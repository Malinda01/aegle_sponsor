import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyAdvertisements() {
  const navigate = useNavigate();

  const ads = [
    {
      id: 1,
      title: "Munchee Chocolate Biscuit Campaign",
      status: "Active",
      timestamp: "Uploaded on 2025-04-20",
    },
    {
      id: 2,
      title: "Munchee Marie Biscuit Awareness Drive",
      status: "Pending Approval",
      timestamp: "Uploaded on 2025-04-22",
    },
    {
      id: 3,
      title: "Munchee Lemon Puff Promo Week",
      status: "Expired",
      timestamp: "Last updated on 2025-03-15",
    },
    {
      id: 4,
      title: "Munchee Super Cream Cracker Launch",
      status: "Draft",
      timestamp: "Last updated on 2025-04-10",
    },
    {
      id: 5,
      title: "Munchee Ginger Biscuit Health Benefits",
      status: "Active",
      timestamp: "Uploaded on 2025-04-18",
    },
    {
      id: 6,
      title: "Munchee Coconut Crunch Campaign",
      status: "Pending Approval",
      timestamp: "Uploaded on 2025-04-25",
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const filteredAds = ads.filter((ad) =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter ads based on search term

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-75 me-2"
          placeholder="Search ads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button
          className="btn btn-success"
          onClick={() => navigate('/upload-ad')}
        >
          Upload Ad
        </button>
      </div>

      {filteredAds.map((ad) => (
        <div className="card mb-3" key={ad.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{ad.title}</h5>
                <span
                  className={`badge ${
                    ad.status === "Active"
                      ? "bg-success"
                      : ad.status === "Pending Approval"
                      ? "bg-warning text-dark"
                      : ad.status === "Draft"
                      ? "bg-info text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {ad.status}
                </span>
                <small className="text-muted ms-2">{ad.timestamp}</small>
              </div>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate('/ad-analytics')}
              >
                Analytics
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyAdvertisements;
