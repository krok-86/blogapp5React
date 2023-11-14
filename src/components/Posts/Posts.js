import {isAxiosError} from "axios"
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import PostItem from "../PostItem/PostItem";
import { getPosts, deletePostById } from "../../api/postApi";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPosts()
        setPosts(result.data);
      } catch (err) {
        errorToast(err.response.data.message); 
        console.log(">>>>>>", err);//toast
      }
    };
    fetchData();
  }, []);

  const deletePost = async (id) => {
    try {
      await deletePostById (id)
      const newPostList = posts.filter((item) => item.id !== id);
      setPosts(newPostList);
      successToast("post is deleted");
    } catch (err) {
      if (isAxiosError(err)) {
        errorToast(err.response.data.message);
      }
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  return (
    <PostsStyled>      
      <div className="posts-area">
      <div className="posts-head">Posts:</div>           
        <div className="post-body">
          <div className="post-value">            
            {posts.map((item) => (
            <PostItem
            key={item.id}
            post={item}
            handleClick={() => deletePost(item.id)}/>
            ))}
            <div className="post-button-area">
            {/* <div className="post-title-post"> */}
              <Link to="/createPost">
                <Button className="post-add-button" name="Add new post" />
              </Link>
            {/* </div>    */}
            {/* <div className="post-title-user"> */}
              <Link to="/createUser">
                <Button className="post-add-button" name="Add new user" />
              </Link>
            {/* </div>  */}
            </div>
          </div>          
        </div>               
      </div>            
    </PostsStyled>
  );
};
export default Posts;
