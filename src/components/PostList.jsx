import React, { useContext } from "react";
import { PostMapper } from "../serverModel/Post";
import { PostList as PostListData } from "../store/post-list-store";
import PostComponent from "./PostComponent";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    // console.log("Get posts got clicked");
    // fetch('https://dummyjson.com/posts')
    //  .then(res => res.json())
    //  .then((data)=>console.log(data.posts));
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((responseJson) =>
        responseJson.posts.map((serverPost) => PostMapper(serverPost))
      )
      .then((posts) => addInitialPosts(posts));
  };

  return (
    <div>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
