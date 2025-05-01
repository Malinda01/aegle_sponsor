import React, { useState } from 'react';
const MakePayment = () => {
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowProcessing(true);

    setTimeout(() => {
      setShowProcessing(false);
      setShowSuccess(true);
    }, 2000); // Show success message after 2 seconds
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Make a Payment</h2>

      {/* Payment Summary */}
      <div className="mb-4 p-3 border rounded bg-light">
        <h5>Payment Summary</h5>
        <p><strong>Sponsor Name:</strong> ABC Healthcare</p>
        <p><strong>Ad Package:</strong> Premium Banner Placement</p>
        <p><strong>Total Amount:</strong> $50.00</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      {/* Processing Message */}
      {showProcessing && (
        <div className="d-flex align-items-center mt-3">
          <div className="spinner-border text-success me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span>Processing your payment...</span>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="alert alert-success mt-3" role="alert">
          ✅ Payment Successful!<br />
          Transaction ID: <strong>#TXN{Math.floor(100000 + Math.random() * 900000)}</strong>
        </div>
      )}

      {/* Payment Form */}
      {!showProcessing && !showSuccess && (
        <form onSubmit={handlePayment}>
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
            <select className="form-select" id="paymentMethod" required>
              <option value="">Select a method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
          </div>

          <div className="mb-3">
            <label htmlFor="cardName" className="form-label">Cardholder Name</label>
            <input type="text" className="form-control" id="cardName" placeholder="John Doe" required />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiry" className="form-label">Expiry Date</label>
              <input type="text" className="form-control" id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="password" className="form-control" id="cvv" placeholder="123" required />
            </div>
          </div>

          <button type="submit" className="btn btn-success">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default MakePayment;
