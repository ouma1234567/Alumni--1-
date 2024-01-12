import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [username1Value, setUsername1Value] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password1Value, setPassword1Value] = useState("");
  const navigate = useNavigate();

  const onLoginContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutMeTextClick = useCallback(() => {
    navigate("/about-me");
  }, [navigate]);

  return (
    <div className="signup">
      <div className="signup1">
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <div className="signup-inner">
          <div className="frame-group">
            <div className="upper-section-wrapper">
              <div className="upper-section1">
                <div className="upper-section-wrapper">
                  <div className="sign-up1">Sign up</div>
                </div>
                <div className="credentials1">
                  <input
                    className="username1"
                    placeholder="Username"
                    type="text"
                    value={usernameValue}
                    onChange={(event) => setUsernameValue(event.target.value)}
                  />
                  <input
                    className="username1"
                    placeholder="Email"
                    type="text"
                    value={username1Value}
                    onChange={(event) => setUsername1Value(event.target.value)}
                  />
                  <div className="password-rem1">
                    <input
                      className="username1"
                      placeholder="Password"
                      type="password"
                      value={passwordValue}
                      onChange={(event) => setPasswordValue(event.target.value)}
                    />
                    <input
                      className="username1"
                      placeholder="Confirm Password"
                      type="password"
                      value={password1Value}
                      onChange={(event) =>
                        setPassword1Value(event.target.value)
                      }
                    />
                    <div className="remember">
                      <img
                        className="fluentcheckbox-checked-16-fil-icon"
                        alt=""
                        src="/fluentcheckboxchecked16filled@2x.svg"
                      />
                      <div className="remember-me">Remember me</div>
                    </div>
                  </div>
                  <div className="login-bt-fp1">
                    <div className="login6" onClick={onLoginContainerClick}>
                      <div className="sign-up1">Sign up</div>
                    </div>
                    <div className="forgot-password">Forgot password ?</div>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className="signup-child" />
        <img className="signup-item" alt="" src="/line-3.svg" />
        <div className="frame-div" />
        <div className="signup-child1" />
        <div className="ob-logo-1-wrapper">
          <img className="ob-logo-13" alt="" src="/ob-logo-2@2x.png" />
        </div>
        <b className="alumni6">ALUMNI</b>
      
        <div className="about-me3" onClick={onAboutMeTextClick}>
          About me
        </div>
      </div>
    </div>
  );
};

export default Signup;
