import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../assets/image-hero-desktop.png";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome--container">
      <div className="welcome--container__details">
        <p className="welcome--title">Get instance access to past papers.</p>
        <p className="welcome--description">
          No need to worry where to access past papers, we have all kind of past
          papers for you. As a student we care about your productivity and we
          want you and your colleagues to spend most of your time revising
          rather than surfing the internet to find the right past paper to go
          through.
        </p>
        <button className="welcome--button" onClick={() => navigate("/paper")}>
          Get started
        </button>
      </div>
      <div className="welcome--container__image">
        <img src={image1} alt="welcome" title="credit to frontend mentor" />
      </div>
    </div>
  );
};

export default Welcome;
