import React, { useState } from "react";
import Suggestions from "../suggestions/Suggestions";
import Post from "./posts/Post";
import "./Timeline.css";

// see https://youtu.be/SqcY0GlETPk?t=3148
export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "lawsonbg",
      image_url:
        "https://i0.wp.com/bdn-data.s3.amazonaws.com/uploads/2024/05/image_50331649-scaled.jpg?w=2560&ssl=1",
      image_alt: "Northern Lights in North Anson, Maine",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "choyt",
      image_url:
        "https://hips.hearstapps.com/hmg-prod/images/young-woman-running-training-in-the-city-royalty-free-image-1628789211.jpg",
      image_alt: "woman running",
      likes: 134,
      timestamp: "12h",
    },
    {
      user: "felipe",
      image_url:
        "https://www.oliviascuisine.com/wp-content/uploads/2015/05/brazilian-cheese-roll-hero.jpg",
      image_alt: "Brazilian cheese bread",
      likes: 1234,
      timestamp: "1d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post: PostProps) => (
            <Post
              key={post.user} // o/w, warning that each child in list should have unique 'key' prop
              user={post.user}
              image_url={post.image_url}
              image_alt={post.image_alt}
              timestamp={post.timestamp}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
