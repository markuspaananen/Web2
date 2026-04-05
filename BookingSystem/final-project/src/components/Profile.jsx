import React from "react";
import profilePic from '../assets/profilePic.jpg'

export default function Profile() {
  return (
    <div className="sisalto">
      <div className="profiilikuva">
        <img src={profilePic} alt="kuva" />
      </div>
      <div className="esittely">
        <h1>Cola koira</h1>
        <p>Cola on kiva koira.</p>
      </div>
    </div>
  );
}