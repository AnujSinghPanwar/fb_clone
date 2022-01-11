import React from "react";
import { users } from "../../dummyData";
import OnlineUser from "../Online/OnlineUser";
import "./rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdyText">
            <b>Vaibhav Singh</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="./assets/posts/add.jpg" alt="" className="rightAdd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          {users.map((user) => (
            <OnlineUser key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/pro.jpg" />
            <span className="rightbarFollowingName">Anuj</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  );
};

export default Rightbar;
