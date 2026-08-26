import { useState } from "react";
import { Eye, EyeOff, Leaf, ArrowRight } from "lucide-react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="login-left">

        <div className="brand">
          <div className="brand-icon">
            <Leaf size={22} />
          </div>

          <span>Krishi Sahayak</span>
        </div>

        <div className="hero-content">
          <span className="small-label">SMART FARMING • BETTER FUTURE</span>

          <h1>
            Grow smarter.
            <br />
            <span>Farm better.</span>
          </h1>

          <p>
            Your intelligent farming companion for healthier crops,
            better decisions and a more productive farm.
          </p>
        </div>

        <div className="plant-decoration">
          🌱
        </div>

      </div>


      {/* Right Section */}
      <div className="login-right">

        <div className="login-card">

          <div className="welcome">
            <h2>Welcome back</h2>

            <p>
              Sign in to continue to your farming dashboard.
            </p>
          </div>

          <form>

            {/* Email */}
            <div className="input-group">
              <label>Email address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="password-label">
                <label>Password</label>

                <button type="button" className="forgot">
                  Forgot password?
                </button>
              </div>

              <div className="password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-button"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* Remember */}
            <div className="remember">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button className="login-button" type="submit">
              Sign in
              <ArrowRight size={19} />
            </button>

          </form>


          <div className="divider">
            <span>or</span>
          </div>


          <button className="google-button" type="button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>


          <p className="signup-text">
            Don't have an account?
            <button type="button">Create account</button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;