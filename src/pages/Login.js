import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const onLoginBtFpClick = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  const onYouDontHaveClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onAboutMeTextClick = useCallback(() => {
    navigate("/about-me");
  }, [navigate]);

  return (
    <div className="login">
      
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="upper-section-parent">
            <div className="upper-section">
              <div className="credentials">
                <input
                  className="username"
                  placeholder="Email"
                  type="text"
                  value={usernameValue}
                  onChange={(event) => setUsernameValue(event.target.value)}
                />
                <div className="password-rem">
                  <input
                    className="password"
                    placeholder="Password"
                    type="password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                  />
                  <div />
                </div>
                <div className="login-bt-fp" onClick={onLoginBtFpClick}>
                  <div className="login1">
                    <div className="login2">Login</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="you-dont-have" onClick={onYouDontHaveClick}>
              you don’t have an account? signup
            </div>
          </div>
        </div>
        <div className="login-text">
          <div className="log-in1">Log in</div>
        </div>
        <div className="frame-child" />
      </div>
      <img className="ob-logo-2" alt="" src="/ob-logo-2@2x.png" />
      <b className="alumni1">ALUMNI</b>
      <div className="about-me2" onClick={onAboutMeTextClick}>
        About me
      </div>
    </div>
  );
};

export default Login;
