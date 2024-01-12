import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/laurat");
  }, [navigate]);

  return (
    <div className="card">
      <div className="card-child" />
      <div className="card-item" />
      <div className="card-inner" />
     
      <img className="line-icon" alt="" src="/line-3.svg" />
      <img className="ob-logo-14" alt="" src="/ob-logo-2@2x.png" />
      <b className="alumni7">ALUMNI</b>
      <div className="card-child2" />
      <img
        className="image-4-icon"
        alt=""
        src="/image-4@2x.png"
        onClick={onImage4Click}
      />
      <div className="spcialisation1">Spécialisation :</div>
      <div className="anne-dinscription1">Année d’inscription :</div>
      <div className="anne-de-diplme">Année de diplôme:</div>
      <div className="nom1">Nom :</div>
      <div className="ville1">Ville :</div>
      <div className="adresse-e-mail1">Adresse e-mail :</div>
      <div className="prenom">Prenom :</div>
    </div>
  );
};

export default Card;
