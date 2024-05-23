import React, { useState } from "react";
import Suggestion from "./Suggestion";
import "./Suggestions.css";

export interface SuggestionProps {
  username: string;
  message: string;
}

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    { username: "jsmith", message: "New to Instagram" },
    { username: "qjones", message: "Famous Dude" },
    { username: "qlatifah", message: "The Equalizer" },
    { username: "jtweedy", message: "Just a rocker dude" },
  ]);

  return (
    <div className="suggestions">
      <div className="suggestions__title">
        <span>Suggested for you</span>
        <button>See all</button>
      </div>
      <div className="suggestions__users">
        {suggestions.map((suggestion: SuggestionProps) => (
          <Suggestion
            key={suggestion.username} // o/w, warning about needing unique key prop
            username={suggestion.username}
            message={suggestion.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
