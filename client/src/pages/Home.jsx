function Home() {
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Welcome Sponsor!</h2>
      <p className="text-muted">
        Manage your advertisements and payments from the dashboard below.
      </p>
      <div className="row mt-4">
        {/* Total Ads Uploaded */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card-body">
              <i className="bi bi-folder display-4 text-primary mb-3"></i>
              <h5 className="card-title">Total Ads Uploaded</h5>
              <p className="card-text display-6 fw-bold">12</p>
            </div>
          </div>
        </div>
        {/* Active Campaigns */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card-body">
              <i className="bi bi-bullseye display-4 text-success mb-3"></i>
              <h5 className="card-title">Active Campaigns</h5>
              <p className="card-text display-6 fw-bold">5</p>
            </div>
          </div>
        </div>
        {/* Total Reach */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card-body">
              <i className="bi bi-graph-up display-4 text-info mb-3"></i>
              <h5 className="card-title">Total Reach</h5>
              <p className="card-text display-6 fw-bold">24,300 views</p>
            </div>
          </div>
        </div>
        {/* Pending Payments */}
        <div className="col-md-3">
          <div className="card text-center shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card-body">
              <i className="bi bi-cash-coin display-4 text-warning mb-3"></i>
              <h5 className="card-title">Pending Payments</h5>
              <p className="card-text display-6 fw-bold">LKR 2,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity and Goal Progress Section */}
      <div className="row mt-5">
        {/* Recent Activity */}
        <div className="col-md-6">
          <h3 className="text-secondary">Recent Activity</h3>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              ✅ "Heart Checkup Week" ad approved
            </li>
            <li className="list-group-item">
              📈 Ad #103 reached 1,200 views
            </li>
            <li className="list-group-item">
              💳 Payment of LKR 750 received on 2025-04-28
            </li>
            <li className="list-group-item">
              📊 Analytics report for "Diabetes Awareness" campaign updated
            </li>
          </ul>
        </div>

        {/* Goal Progress */}
        <div className="col-md-6">
          <h3 className="text-secondary">Goal Progress</h3>
          <div className="mt-3">
            {/* Goal: Reaching 50,000 ad views */}
            <div className="mb-4">
              <h5>Reaching 50,000 Ad Views</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  65% to goal
                </div>
              </div>
            </div>
            {/* Goal: Supporting 100 free consultations */}
            <div>
              <h5>Supporting 100 Free Consultations</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  40% to goal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
