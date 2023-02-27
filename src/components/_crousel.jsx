import React, { useContext } from "react";
import "./css/corusel.css";
import team from "../images/teamillustr2.png";
import { UserContext } from "../App";

export function _crousel() {
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slide">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slide">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slide">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slide">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>

        {/* extra for small szie */}
        {/* <div className="slide">
          <img src={team} alt="" />
        </div> */}
      </div>
    </div>
  );
}
export function _crouselSmall() {
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  return (
    <div className="sliderS">
      <div className="slide-trackS">
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>

        {/* extra for small szie */}
        <div className="slideS">
          <img src={team} alt="" style={{ background: bgcolor }} />
        </div>
      </div>
    </div>
  );
}

export default _crousel;
