function MakePayment() {
    return (
      <div className="container mt-5">
        <h3>Payment History</h3>
        <ul className="list-group mt-3">
          <li className="list-group-item d-flex justify-content-between">
            Ad #1 - ₹500 <span>Paid on 2025-04-25</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Ad #2 - ₹750 <span>Paid on 2025-04-10</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default MakePayment;
  