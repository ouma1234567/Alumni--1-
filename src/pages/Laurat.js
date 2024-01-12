import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Laurat.css";

const Laurat = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle14Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle15Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle17Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle18Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle26Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle27Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle28Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle29Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle30Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle31Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle38Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle40Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle42Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle44Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle46Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle48Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle49Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle50Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onRectangle54Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  const onHomeDuotoneIconClick = useCallback(() => {
    navigate("/accueil");
  }, [navigate]);

  return (
    <div className="laurat">
      <div className="laurat-child" />
      <div className="laurat-item" onClick={onRectangle1Click} />
      <div className="laurat-inner" onClick={onRectangle2Click} />
      <div className="rectangle-div" onClick={onRectangle3Click} />
      <div className="laurat-child1" onClick={onRectangle4Click} />
      <div className="laurat-child2" onClick={onRectangle5Click} />
      <div className="laurat-child3" />
      <div className="laurat-child4" />
      <div className="laurat-child5" />
      <div className="laurat-child6" onClick={onRectangle9Click} />
      <div className="laurat-child7" />
      <div className="laurat-child8" />
      <div className="laurat-child9" />
      <div className="laurat-child10" />
      <div className="laurat-child11" onClick={onRectangle14Click} />
      <div className="laurat-child12" onClick={onRectangle15Click} />
      <div className="laurat-child13" onClick={onRectangle16Click} />
      <div className="laurat-child14" onClick={onRectangle17Click} />
      <div className="laurat-child15" onClick={onRectangle18Click} />
      <div className="laurat-child16" onClick={onRectangle19Click} />
      <div className="laurat-child17" />
      <div className="laurat-child18" />
      <div className="laurat-child19" />
      <div className="laurat-child20" />
      <div className="laurat-child21" />
      <div className="laurat-child22" />
      <div className="laurat-child23" onClick={onRectangle26Click} />
      <div className="laurat-child24" onClick={onRectangle27Click} />
      <div className="laurat-child25" onClick={onRectangle28Click} />
      <div className="laurat-child26" onClick={onRectangle29Click} />
      <div className="laurat-child27" onClick={onRectangle30Click} />
      <div className="laurat-child28" onClick={onRectangle31Click} />
      <div className="laurat-child29" />
      <div className="laurat-child30" />
      <div className="laurat-child31" />
      <div className="laurat-child32" />
      <div className="laurat-child33" />
      <div className="laurat-child34" />
      <div className="laurat-child35" onClick={onRectangle38Click} />
      <div className="laurat-child36" />
      <div className="laurat-child37" onClick={onRectangle40Click} />
      <div className="laurat-child38" />
      <div className="laurat-child39" onClick={onRectangle42Click} />
      <div className="laurat-child40" />
      <div className="laurat-child41" onClick={onRectangle44Click} />
      <div className="laurat-child42" />
      <div className="laurat-child43" onClick={onRectangle46Click} />
      <div className="laurat-child44" />
      <div className="laurat-child45" onClick={onRectangle48Click} />
      <div className="laurat-child46" onClick={onRectangle49Click} />
      <div className="laurat-child47" onClick={onRectangle50Click} />
      <div className="laurat-child48" />
      <div className="laurat-child49" />
      <div className="laurat-child50" />
      <div className="laurat-child51" onClick={onRectangle54Click} />
      <div className="laurat-child52" />
      <div className="ellipse-div" />
      <img className="ob-logo-11" alt="" src="/ob-logo-2@2x.png" />
      <b className="alumni3">ALUMNI</b>
      <div className="name-abdulrhman-container">
        <p className="alumni-cle-informatique">{`ALUMNI CLE-INFORMATIQUE `}</p>
      </div>
     
      <div className="log-out1" onClick={onLogOutTextClick}>
        Log out
      </div>
      <div className="home1" onClick={onHomeTextClick}>
        Home
      </div>
      
    </div>
  );
};

export default Laurat;
