import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Simulate fetching logged-in user data (replace with actual logic)
    const user = localStorage.getItem('loggedInUser'); // Example: Fetch from localStorage
    setLoggedInUser(user);
  }, []);

  const hideButtons = ['/login', '/register', '/', '/welcome'];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <span className="navbar-brand">Aegle Sponsor</span>
      {!hideButtons.includes(location.pathname) && (
        <div className="d-flex ms-auto align-items-center">
          <a className="nav-link text-white me-3" href="/home">Home</a>
          <a className="nav-link text-white me-3" href="/my-ads">My Ads</a>
          <a className="nav-link text-white me-3" href="/payment-history">Payments</a>
          <a 
            className="nav-link text-white me-3" 
            onClick={() => navigate('/profile')} 
            title={loggedInUser ? `Logged in as: ${loggedInUser}` : ''}
          >
            Profile
          </a>
          {loggedInUser && (
            <span className="text-white">Logged in as: {loggedInUser}</span>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
