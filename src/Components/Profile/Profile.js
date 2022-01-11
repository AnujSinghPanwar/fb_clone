import React from "react";
import { Sidebar, Feed, Rightbar, Topbar } from "../index";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/posts/feet.jpg" />
              <img className="profileUserImg" src="assets/users/anuj.jpg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Anuj Panwar</h4>
              <h4 className="profileInfoDesc">Fresher</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
