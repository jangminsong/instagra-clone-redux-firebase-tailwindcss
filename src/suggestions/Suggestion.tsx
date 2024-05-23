import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";

import "./Suggestions.css";

function Suggestion({ username, message }: SuggestionProps) {
  return (
    <div className="suggestions__one-user">
      <div className="suggestions__avatar-and-username">
        <div className="suggestions__avatar">
          <Avatar>
            <img src={faker.image.avatar()} />
          </Avatar>
        </div>
        <div className="suggestions__username-and-message">
          <span className="suggestions__username">{username}</span>
          <span className="suggestions__message">{message}</span>
        </div>
      </div>
      <button className="suggestions__follow-button">Follow</button>
    </div>
  );
}

export default Suggestion;
