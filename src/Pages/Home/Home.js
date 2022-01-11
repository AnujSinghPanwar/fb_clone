import React from "react";
import { Rightbar, Feed, Topbar, Sidebar } from "../../Components";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
