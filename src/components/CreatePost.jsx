import React, { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ")

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

   addPost(userId,postTitle,postBody,reactions,tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user ID here
        </label>
        <input
          ref={userIdElement}
          placeholder="Your userId"
          type="text"
          className="form-control"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          placeholder="How are you feeling today..!"
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          ref={postBodyElement}
          placeholder="Tell us more about it"
          type="text"
          rows="4"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactionsElement}
          placeholder="How many people reacted to this post"
          type="text"
          className="form-control"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagsElement}
          placeholder="Please enter tags using space "
          type="text"
          className="form-control"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
