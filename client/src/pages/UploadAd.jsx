import { useNavigate } from 'react-router-dom';

function UploadAd() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h3>Upload Advertisement</h3>
      <input className="form-control mb-3" placeholder="Ad Title" />
      <textarea className="form-control mb-3" placeholder="Description"></textarea>
      <select className="form-control mb-3">
        <option value="">Select Target Audience</option>
        <option value="youth">Youth</option>
        <option value="adults">Adults</option>
        <option value="seniors">Seniors</option>
      </select>
      <div className="row mb-3">
        <div className="col">
          <input className="form-control" type="date" placeholder="Start Date" />
        </div>
        <div className="col">
          <input className="form-control" type="date" placeholder="End Date" />
        </div>
      </div>
      <select className="form-control mb-3">
        <option value="">Select Campaign Category</option>
        <option value="blood-donation">Blood Donation</option>
        <option value="mental-health">Mental Health</option>
        <option value="awareness">Awareness</option>
      </select>
      <input className="form-control mb-3" placeholder="CTA (Call-to-Action)" />
      <input className="form-control mb-3" type="url" placeholder="Landing Page URL" />
      <div className="mb-3">
        <label className="form-label">Schedule Ad</label>
        <div>
          <input type="radio" name="schedule" id="runNow" className="me-2" />
          <label htmlFor="runNow" className="me-4">Run now</label>
          <input type="radio" name="schedule" id="scheduleLater" className="me-2" />
          <label htmlFor="scheduleLater">Schedule for later</label>
        </div>
      </div>
      <input className="form-control mb-3" type="file" />
      <button className="btn btn-primary" onClick={() => navigate('/MakePayment')}>Continue to Payment</button>
    </div>
  );
}

export default UploadAd;
