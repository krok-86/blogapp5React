import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import PostItem from "../PostItem/PostItem";
import { getPosts, deletePostById } from "../../api/postApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/posts";

const Posts = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector ((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';

  // const [postsData, setPostsData] = useState([]);

  // const [logOut, setLogOut] = useState("");

  const savedUser = JSON.parse(localStorage.getItem("userValue"));

  // const exitLogIn = () => {
  //   setLogOut(localStorage.removeItem("userValue"));
  // };

  useEffect(() => {
    dispatch(fetchPosts());
    // const fetchData = async () => {
    //   try {
    //     const result = await getPosts();
    //     setPosts(result.data);
    //   } catch (err) {
    //     errorToast(err.response.data.message);
    //     console.log(">>>>>>", err);
    //   }
    // };
    // fetchData();
  }, []);

  // /**
  //  * Func to delete post
  //  * @param {number} id - id of item to delete
  //  * @param {number} authorId id of author
  //  */
  // deletePost(10,)

  const deletePost = async (id, authorId) => {
    try {
      //if (savedUser.id === authorId) {//?
        await deletePostById(id);
        const newPostList = posts.filter((obj) => obj.id !== id);
        dispatch(newPostList);
        successToast("post is deleted");
      // } else {
      //   errorToast("You cant delete this post");
      // }
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
          {/* <div className="post-user">Log in: {savedUser?.name}</div>
          <div className="post-user">{savedUser?.email}</div>
          <div onClick={exitLogIn} className="post-user-logOut">
            Log out
          </div> */}
          <div className="post-value">
            {posts.items.map((obj) => (
              <PostItem
                key={obj.id}
                post={obj}
                handleClick={() => deletePost(obj.id, obj.user?.id)}
              />
            ))}
            <div className="post-button-area">
              <Link to="/createPost">
                <Button className="post-add-button" name="Add new post" />
              </Link>
              <Link to="/auth">
                <Button className="post-add-button" name="Log in" />
              </Link>
              <Link to="/registration">
                <Button className="post-add-button" name="Sign up" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
