import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    nic: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Added state for success message
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.nic) newErrors.nic = "NIC No is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms and Privacy Policy.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSuccessMessage("Registration successful!"); // Set success message
      setTimeout(() => {
        navigate("/login"); // Navigate to Login page after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <h2 className="mb-4">Register</h2>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <input
          className="form-control mb-3"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
        <input
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
        <input
          className="form-control mb-3"
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        {errors.company && (
          <small className="text-danger">{errors.company}</small>
        )}
        <input
          className="form-control mb-3"
          placeholder="NIC No"
          name="nic"
          value={formData.nic}
          onChange={handleChange}
        />
        {errors.nic && <small className="text-danger">{errors.nic}</small>}
        <input
          className="form-control mb-3"
          placeholder="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"} // Toggle between text and password
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle state
          >
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i> {/* Eye icon */}
          </button>
        </div>
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="agreeToTerms"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <small className="text-danger">{errors.agreeToTerms}</small>
        )}
        <button
          className="btn btn-success"
          style={{ width: "150px" }}
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
