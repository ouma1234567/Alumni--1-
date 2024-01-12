import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Accueil.css";

const Accueil = () => {
  const navigate = useNavigate();

  const onLoginContainerClick = useCallback(() => {
    navigate("/laurat");
  }, [navigate]);

  const onLoginContainer1Click = useCallback(() => {
    navigate("/formulaire");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="accueil">
      <div className="accueil-child" />
      <div className="login4" onClick={onLoginContainerClick}>
        <div className="laurats"> Lauréats</div>
      </div>
      <div className="accueil-item" />
      <div className="bienvenue">{`Bienvenue! `}</div>
      <div className="accueil-inner" />
      <div className="line-div" />
      <img className="icon" alt="" src="/3-1@2x.png" />
      <div className="alumni4">{`ALUMNI `}</div>
      <div className="sur">sur</div>
      <div className="cle-informatique">CLE-INFORMATIQUE</div>
      <img className="ob-logo-12" alt="" src="/ob-logo-2@2x.png" />
      <b className="alumni5">ALUMNI</b>
      <div className="login5" onClick={onLoginContainer1Click}>
        <div className="laurats">formulaire</div>
      </div>
      
      <div className="log-out2" onClick={onLogOutTextClick}>
        Log out
      </div>
    </div>
  );
};

export default Accueil;
