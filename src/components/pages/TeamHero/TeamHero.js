import React, { useState, useEffect } from "react";
import "./TeamHero.css";
import "../../../App.css";
// import { Button } from "../Button/Button";

function TeamHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts

  //-------------------------------------------

  return (
    <div className="hero-container">
      <video src="/videos/team1.mov" autoPlay loop muted />
      <h1 className={isVisible ? "" : "fade-out"}>Meet the Team</h1>
      <p className={isVisible ? "" : "fade-out"}> Driven by a shared vision</p>
      {/* Diverse minds, unified mission */}
      {/* Driven by a shared vision */}
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          fadeClass={isVisible ? "" : "fade-out"}
        >
          Explore
        </Button> */}
      </div>
    </div>
  );
}

export default TeamHero;
