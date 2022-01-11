import React from "react";
import "./online.css"


const OnlineUser = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="profileContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} />
        <span className="rightbarOnline"></span>
      </div>
      <span className="username">{user.username}</span>
    </li>
  );
};

export default OnlineUser;
