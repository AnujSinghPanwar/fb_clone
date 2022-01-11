import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
import { users, posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
