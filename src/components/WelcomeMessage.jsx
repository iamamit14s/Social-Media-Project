import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no Posts</h1>
      <button
        onClick={onGetPostsClick}
        type="button"
        className="btn btn-primary"
      >
        Get Posts from the Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
