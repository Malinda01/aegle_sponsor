import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UploadAd from './pages/UploadAd';
import MyAdvertisements from './pages/MyAdvertisements';
import AdAnalytics from './pages/AdAnalytics';
import MakePayment from './pages/MakePayment';
import WelcomePage from './pages/WelcomePage';
import PaymentHistory from './pages/PaymentHistory';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-ads" element={<MyAdvertisements />} />
          <Route path="/upload-ad" element={<UploadAd />} />
          <Route path="/ad-analytics" element={<AdAnalytics />} />
          <Route path="/payments" element={<MakePayment />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
