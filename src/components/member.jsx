// /* This example requires Tailwind CSS v2.0+ */
import { LightBulbIcon, PaperClipIcon } from "@heroicons/react/solid";

import React, { useContext } from "react";
import "./css/footer.css";
import { UserContext } from "../App";
import img from "../images/logopng.png";

function Member() {
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  return (
    <div className="footer" style={{ background: SecondaryColor }}>
      <div style={{ background: "none" }}>
        <img src={img} alt="GrindOwl" className="logofooter" />
        <h1 style={{ background: "none", color: Pcolor }}>Craft-X</h1>
      </div>
      <div style={{ background: "none", display: "flex", flexWrap: "wrap" }}>
        <div className="footerMid" style={{ color: Pcolor }}>
          Copyright @
          <span
            className="companyfooterMid"
            style={{ background: "none", color: Pcolor }}
          >
            Craft-X
          </span>
        </div>
      </div>
      <div style={{ background: "none", display: "flex", flexWrap: "wrap" }}>
        <div className="footerEnd" style={{ color: Pcolor }}>
          <PaperClipIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
            style={{ background: "none" }}
          />{" "}
          Made By -
        </div>
        <span
          className="companyfooterEnd"
          style={{ background: "none", color: Pcolor }}
        >
          Vinayak Porwal
        </span>
      </div>
      {/* choose(tick) the stepping stone(tack)  */}
      {/* Tick the track of Tacks  */}
    </div>
  );
}

export default Member;

// import React from "react";

// function Member() {
//   return <div>Member</div>;
// }

// export default Member;
