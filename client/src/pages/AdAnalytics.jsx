function AdAnalytics() {
    return (
      <div className="container mt-5">
        <h3 className="text-primary mb-4">Ad Performance Analytics</h3>
        <ul className="list-group mt-3">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Views <span className="badge bg-primary rounded-pill">2,345</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Clicks <span className="badge bg-success rounded-pill">451</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            CTR <span className="badge bg-warning text-dark rounded-pill">19.2%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Conversion Rate <span className="badge bg-danger rounded-pill">6.5%</span>
          </li>
        </ul>
        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className="text-secondary">Viewer Regions</h4>
            <table className="table table-striped table-bordered mt-3">
              <thead className="table-dark">
                <tr>
                  <th>Region</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Colombo</td>
                  <td>1,200</td>
                </tr>
                <tr>
                  <td>Kandy</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Galle</td>
                  <td>300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded bg-light mt-5">
              <h4 className="text-secondary">Engagement Metrics</h4>
              <p className="fs-5">Avg. time spent on ad: <strong>12.3 seconds</strong></p>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-4">Download Report (PDF)</button>
      </div>
    );
  }
  
  export default AdAnalytics;
