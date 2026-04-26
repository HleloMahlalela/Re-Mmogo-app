import "../styles/register.css";

function Register() {
  return (
    <div className="register-page">
      {/*main card*/}
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join Re-Mmogo and manage your Motshelo group easily.</p>

        {/*registration form*/}
        <form className="register-form">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
          />

          {/*email*/}
          <input
            type="email"
            placeholder="Email Address"
          />

          {/*contact*/}
          <input
            type="text"
            placeholder="Phone Number"
          />

          {/*password*/}
          <input
            type="password"
            placeholder="Password"
          />

          {/*confirm password*/}
          <input
            type="password"
            placeholder="Confirm Password"
          />

          {/*submit button*/}
          <button type="submit">
            Register
          </button>
        </form>

        {/*bottom text*/}
        <p className="login-link">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;