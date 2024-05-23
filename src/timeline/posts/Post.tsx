import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreOptionsIcon from "@mui/icons-material/MoreHoriz";
import FavoritesIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";

// https://fakerjs.dev/api/image.html#avatar
import { faker } from "@faker-js/faker";

import "./Post.css";

// PostProps interface defined in Timeline.tsx
//function Post(props: PostProps) {
function Post({ user, image_url, image_alt, timestamp, likes }: PostProps) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__author">
          <Avatar className="material-icons the-avatar">
            <img src={faker.image.avatarLegacy()} />
          </Avatar>
          {user}
          <span>• {timestamp}</span>
        </div>
        <div className="post__more">
          <MoreOptionsIcon />
        </div>
      </div>
      <div className="post__image">
        <img src={image_url} alt={image_alt} />
      </div>
      <div className="post__footer">
        <div className="post__footer-icons-container">
          <div className="post__footer-main">
            <FavoritesIcon className="material-icons post-icon" />
            <ChatIcon className="material-icons post-icon" />
            <ShareIcon className="material-icons post-icon" id="send-icon" />
          </div>
          <div className="post__footer-save">
            <BookmarkIcon className="material-icons post-icon" />
          </div>
        </div>
        <span className="post__footer-liked">{likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
