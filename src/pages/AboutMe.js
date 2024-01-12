import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="about-me">
      <div className="about-me-child" />
      <div className="about-me-item" />
      <div className="about-me-inner" />
     
      <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
      <i className="benmoumen-oumaima">
        <p className="benmoumen">BENMOUMEN</p>
        <p className="benmoumen">OUMAIMA</p>
      </i>
      <div className="passionne-par-linformatique">
        Passionnée par l'informatique depuis mon plus jeune âge, je m'appelle
        Oumaima Benmoumen, une étudiante de 21 ans en 3ème année à l'École
        Normale Supérieure de Rabat, filière CLE-INFORMATIQUE."
      </div>
      
      <div className="about-me1">ABOUT ME</div>
      <div className="contact-me">contact me</div>
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <div className="benmoumenoumaimagmailcom">benmoumenoumaima@gmail.com</div>
      
      <div className="log-in" onClick={onLogInTextClick}>
        Log in
      </div>
      <img
        className="about-me-child3"
        alt=""
        src="/"
        onClick={onRectangle6Click}
      />
      <div className="sign-up">Sign up</div>
      <b className="alumni">ALUMNI</b>
    </div>
  );
};

export default AboutMe;
