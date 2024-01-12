import { useState, useCallback } from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Formulaire.css";

const Formulaire = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const [frameInput3Value, setFrameInput3Value] = useState("");
  const [frameInput4Value, setFrameInput4Value] = useState("");
  const [frameInput5Value, setFrameInput5Value] = useState("");
  const [frameInput6Value, setFrameInput6Value] = useState("");
  const [frameInput7Value, setFrameInput7Value] = useState("");
  const [frameInput8Value, setFrameInput8Value] = useState("");
  const [frameInput9Value, setFrameInput9Value] = useState("");
  const [frameInput10Value, setFrameInput10Value] = useState("");
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeDuotoneIconClick = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/laurat");
  }, [navigate]);

  return (
    <div className="formulaire">
      <div className="login3">
        <div className="navigation-c">
         
          <div className="sample-logo" />
          <div className="home" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="community">Community</div>
          <div className="log-out" onClick={onLogOutTextClick}>
            Log out
          </div>
        
          <img className="ob-logo-1" alt="" src="/ob-logo-2@2x.png" />
          <b className="alumni2">ALUMNI</b>
        </div>
        <div className="login-item" />
        <div className="footer">
          <img className="fb-icon" alt="" src="/fb@2x.svg" />
          <img className="linkedin-icon" alt="" src="/linkedin@2x.svg" />
          <img className="group-icon" alt="" src="/group@2x.svg" />
          <img className="insta-icon" alt="" src="/insta@2x.svg" />
          <div className="copyright-2020-all">{`Copyright ©2020 All rights reserved `}</div>
        </div>
        <div className="search-parent">
          <b className="search">Search</b>
         
        </div>
        <div className="formulaire-dinscription">Formulaire d’inscription</div>
        <img className="login-inner" alt="" src="/ellipse-67@2x.png" />
        <input
          className="frame-input"
          required={true}
          autoFocus={true}
          disabled={true}
          readOnly={true}
          type="file"
        />
        <div className="nom">
          <span>{`Nom `}</span>
          <span className="span">*</span>
        </div>
        <div className="profils-linkedin">Profils LinkedIn</div>
        <div className="short-biography">short biography</div>
        <div className="titre-du-poste">Titre du poste actuel</div>
        <div className="spcialisation">
          <span>Spécialisation</span>
          <span className="span">*</span>
          <span>{` `}</span>
        </div>
        <div className="anne-dinscription">
          <span>Année d’inscription</span>
          <span className="span">*</span>
          <span>{` `}</span>
        </div>
        <div className="anne-de-diplme-container">
          <span>Année de diplôme</span>
          <span className="span3">*</span>
        </div>
        <div className="adresse-e-mail">
          <span>Adresse e-mail</span>
          <span className="span3">*</span>
        </div>
        <div className="ville">
          <span>Ville</span>
          <span className="span">*</span>
        </div>
        <div className="date-naissance">
          <span>Date naissance</span>
          <span className="span3">*</span>
        </div>
        <div className="genre">
          <span>{`Genre `}</span>
          <span className="span3">*</span>
        </div>
        <div className="prnom">
          <span>Prénom</span>
          <span className="span">*</span>
        </div>
        <input
          className="login-child1"
          type="text"
          value={frameInputValue}
          onChange={(event) => setFrameInputValue(event.target.value)}
        />
        <input
          className="login-child2"
          type="text"
          value={frameInput1Value}
          onChange={(event) => setFrameInput1Value(event.target.value)}
        />
        <input
          className="login-child3"
          type="number"
          value={frameInput2Value}
          onChange={(event) => setFrameInput2Value(event.target.value)}
        />
        <input
          className="login-child4"
          type="text"
          value={frameInput3Value}
          onChange={(event) => setFrameInput3Value(event.target.value)}
        />
        <input
          className="login-child5"
          type="text"
          value={frameInput4Value}
          onChange={(event) => setFrameInput4Value(event.target.value)}
        />
        <input
          className="login-child6"
          type="text"
          value={frameInput5Value}
          onChange={(event) => setFrameInput5Value(event.target.value)}
        />
        <input
          className="login-child7"
          type="text"
          value={frameInput6Value}
          onChange={(event) => setFrameInput6Value(event.target.value)}
        />
        <input
          className="login-child8"
          type="number"
          value={frameInput7Value}
          onChange={(event) => setFrameInput7Value(event.target.value)}
        />
        <input
          className="login-child9"
          placeholder="@um5.ac.ma"
          type="text"
          value={frameInput8Value}
          onChange={(event) => setFrameInput8Value(event.target.value)}
        />
        <input
          className="login-child10"
          type="text"
          value={frameInput9Value}
          onChange={(event) => setFrameInput9Value(event.target.value)}
        />
        <input
          className="login-child11"
          placeholder="jj/mm/aaaa"
          type="date"
          value={frameInput10Value}
          onChange={(event) => setFrameInput10Value(event.target.value)}
        />
        <div className="femelle">Femelle</div>
        <div className="male">Male</div>
        <RadioGroup className="wrapper">
          <Radio />
        </RadioGroup>
        <RadioGroup className="container">
          <Radio />
        </RadioGroup>
        <div className="annuler-wrapper" onClick={onFrameContainer1Click}>
          <div className="annuler">Annuler</div>
        </div>
        <div className="sinscrire-wrapper" onClick={onFrameContainer2Click}>
          <div className="sinscrire">s'inscrire</div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
