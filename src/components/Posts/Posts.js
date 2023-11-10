import axios from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import {format} from "date-fns";
import ru from "date-fns/locale/ru";
import { enGB } from "date-fns/esm/locale";

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
      console.log(posts);
      const newPostList = posts.filter((item) => item.id !== id);
      setPosts(newPostList);
      successToast("post is deleted");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };
  console.log(posts);
  return (
    <PostsStyled>
      <div className="postsArea">
        <div className="postsHead">Posts:</div>
        <div className="postBody">
          <div className="postValue">
            <div className="postTitle">
              <Link to="/New">
                <Button className="postAddButton" name="add new post" />
              </Link>
            </div>
            {posts.map((item, index) => (
              <div className="postValue" key={`posts${index}`}>
                <div className="postText">{item.post}</div>
                <div className="postInfo">
                  <div className="postNumber" key={`post${index}`}>
                    post #{index + 1}
                  </div>
                  <div className="postNumber" key={`author${index}`}>
                    Topic:
                    {item.topics.map((item,index) => (
                      <div key={`topics${index}`}>{item?.title}</div>
                    ))}
                  </div>
                  <div className="postNumber" key={`data${index}`}>
                    created at {format(new Date(item.createdAt), 'MMM d, yyyy', {locale: enGB})}
                  </div>
                  <div className="postNumber">Author {item?.user?.name}</div>
                  <Button
                    handleClick={() => deletePost(item.id)}
                    name="delete"
                  />
                  <Link to={`/PostEdit/${item.id}`}>
                    <Button name="edit" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
