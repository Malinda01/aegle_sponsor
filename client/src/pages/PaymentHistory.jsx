import React, { useState } from 'react';

function PaymentHistory() {
  const payments = [
    { id: 1, date: '2025-04-01', amount: 'Rs.10000' },
    { id: 2, date: '2025-04-15', amount: 'Rs.15000' },
    { id: 3, date: '2025-05-10', amount: 'Rs.20000' },
    { id: 4, date: '2025-06-05', amount: 'Rs.25000' },
  ];

  const [filterMonth, setFilterMonth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredPayments = payments.filter((payment) => {
    if (filterMonth) {
      return payment.date.startsWith(filterMonth);
    }
    if (startDate && endDate) {
      return payment.date >= startDate && payment.date <= endDate;
    }
    return true;
  });

  const totalPayments = filteredPayments.length;
  const totalAmount = filteredPayments.reduce((sum, payment) => {
    return sum + parseFloat(payment.amount.replace('$', ''));
  }, 0);

  const handleDownloadPDF = () => {
    // Logic to generate and download PDF
    console.log('Download PDF clicked');
  };

  const handleExportCSV = () => {
    // Logic to generate and export CSV
    console.log('Export CSV clicked');
  };

  return (
    <div className="container mt-5">
      <h2>Payment History</h2>
      <div className="mb-4">
        <strong>Total Payments:</strong> {totalPayments} | <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </div>
      <div className="mb-3">
        <label className="form-label">Filter by Month</label>
        <input
          type="month"
          className="form-control mb-2"
          value={filterMonth}
          onChange={(e) => {
            setFilterMonth(e.target.value);
            setStartDate('');
            setEndDate('');
          }}
        />
        <label className="form-label">Filter by Date Range</label>
        <div className="d-flex">
          <input
            type="date"
            className="form-control me-2"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setFilterMonth('');
            }}
          />
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setFilterMonth('');
            }}
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment, index) => (
            <tr key={payment.id}>
              <td>{index + 1}</td>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleDownloadPDF}>Download PDF</button>
        <button className="btn btn-secondary ms-2" onClick={handleExportCSV}>Export CSV</button>
      </div>
    </div>
  );
}

export default PaymentHistory;
