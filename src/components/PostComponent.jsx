import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const PostComponent = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="card post-card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdOutlineDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success" role="alert">
            This post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
