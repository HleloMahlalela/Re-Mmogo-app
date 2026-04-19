import "../styles/register.css";

function Register() {
  return (
    <div className="register-page">
      {/* Main card */}
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join Re-Mmogo and manage your Motshelo group easily.</p>

        {/* Registration form */}
        <form className="register-form">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
          />

          {/* Submit Button */}
          <button type="submit">
            Register
          </button>
        </form>

        {/* Bottom text */}
        <p className="login-link">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;