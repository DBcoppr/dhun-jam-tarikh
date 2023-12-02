import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useLogin, { handleLogin } from "../dashboard/api";
import { useDashboardContext } from "../dashboardContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { updateAdminData } = useDashboardContext();
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await handleLogin(
      "https://stg.dhunjam.in/account/admin/login",
      {
        username,
        password,
      }
    );
    if (data) {
      updateAdminData(data);
      navigate("/dashboard");
    }
  };

  return (
    <div className="layout-main">
      <div className="venue-admin-login">
        <h1>Venue Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span
              onClick={handleTogglePassword}
              className="password-visibility-toggle"
            >
              {!showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
          <button type="submit">Sign In</button>
          <div className="newRegister">New Registration ?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
