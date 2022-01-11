import React from "react";
import "./topbar.css";
import { Chat, Person, Search, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">Facebook</div>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search  className="searchIcon"/>
          <input className="searchInput" placeholder="Search Frinds" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
