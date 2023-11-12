import axios from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";

import PostItem from "../PostItem/PostItem";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3003/blog/posts");
        setPosts(result.data);
      } catch (err) {
        console.log(">>>>>>", err);
      }
    };
    fetchData();
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/blog/posts/${id}`, posts);
      const newPostList = posts.filter((item) => item.id !== id);
      setPosts(newPostList);
      successToast("post is deleted");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  return (
    <PostsStyled>
      <div className="postsArea">
        <div className="postsHead">Posts:</div>
        <div className="postBody">
          <div className="postValue">
            <div className="postTitle">
              <Link to="/New">
                <Button className="postAddButton" name="Add new post" />
              </Link>
            </div>
            {posts.map((item, index) => (
            <PostItem
            key={index}
            post={item}
            handleClick={() => deletePost(item.id)}
            />
            ))}
          </div>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
