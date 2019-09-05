"use strict";
import React from "react";

//wrapper for the landing page
const Index = props => {
  const profile_id = [
    "6052108150",
    "4478765511",
    "18813170494",
    "7697028991",
    "3730719782",
    "9631096109",
    "2170829109",
    "12730789366",
    "18852667192",
    "5777571021",
    "418371892"
  ];
  return (
    <div>
      Please click on a profil
      <ul>
        {profile_id.map((e, i) => (
          <li
            key={i}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
