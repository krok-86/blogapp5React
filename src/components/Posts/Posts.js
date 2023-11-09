import axios from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
console.log(posts)
      const newPostList = posts.filter( (item)=>item.id !== id)
      setPosts(newPostList);
      toast.success('Post is deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };
console.log(posts)
// const topicTitle = posts.map((item) => ({ title: item.title}));
// console.log(topicTitle)
  return (
    <PostsStyled>
      <div className="postsArea">
        <div className="postsHead">Posts:</div>
        <div className="postBody">
          <div className="postValue">
            <div className="postTitle">
              <Link to="/New">
                <button className="postAddButton">add new post</button>
              </Link>
            </div>
            {posts.map((item, index) => (
              <div className="postValue" key={item.id}>
                {item.post}
                <div className="postInfo">
                  <div className="postNumber" key={item.id}>
                    post #{index + 1}
                  </div>
                  <div className="postNumber" key={item.id}>
                  Topic:
                  {item.topics.map ((item ) => (
                  <div>
                     {item?.title}
                  </div>
                  ))}
                  </div>
                  <div className="postNumber" key={item.id}>
                    created at {item.createdAt}
                  </div>
                  <div className="postNumber">Author {item?.user?.name}</div>
                  <button
                    className="postButton"
                    onClick={() => deletePost(item.id)}
                  >                 
                    delete
                  </button>
                  <Link to={`/PostEdit/${item.id}`}>
                    <button className="postButton postButton__edit">edit</button>
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
