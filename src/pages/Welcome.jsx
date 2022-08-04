import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome--container">
      <div className="welcome--container__details">
        <p>Access past papers</p>
        <p>
          Software development refers to a set of computer science activities
          dedicated to the process of creating, designing, deploying and
          supporting software. Software itself is the set of instructions or
          programs that tell a computer what to do. It is independent of
          hardware and makes computers programmable.
        </p>
      </div>
      <div className="welcome--container__image">B</div>
    </div>
  );
};

export default Welcome;
