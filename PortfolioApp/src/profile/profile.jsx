import React from "react";
import DATA from "./data";
import Link from "./link";
import "./profile.css";

function Container() {
  return (
    <div className="profile-container">
      <div className="profile-div">
        <div className="helper"></div>
        <img className="profile-image" src={DATA.image} alt={DATA.name} />
      </div>
      <div className="profile-div">
        <div className="profile-text">
          <p className="profile-message">Hello agents! This is</p>
          <h1 className="profile-title">{DATA.name}</h1>
          <p className="profile-description">{DATA.descripiton}</p>
          <u1 className="profile-list">
            {DATA.socialMedia.map((socialMedia) => (
              <li key={socialMedia.href}>
                <Link {...socialMedia} />
              </li>
            ))}
          </u1>
        </div>
      </div>
    </div>
  );
}

export default Container;