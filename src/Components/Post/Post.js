import { MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import { users } from "../../dummyData";
import "./post.css";

const Post = ({ p }) => {
  const { photo, date, desc, like, comment, userId } = p;
  const [lik, setLike] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? lik - 1 : lik + 1);
    setIsLiked(!isLiked)
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={users.filter((u) => u.id === userId)[0].profilePicture}
              alt="image"
              className="postProfileImg"
            />
            <span className="postUsername">
              {users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="image" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={isLiked ? "./assets/thumb.png" : "./assets/un.png"}
              onClick={likeHandler}
              alt="image"
            />
            <img
              className="likeIcon"
              src="./assets/heart.png"
              onClick={likeHandler}
              alt="image"
            />
            <span className="postLikeCounter">{lik} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
