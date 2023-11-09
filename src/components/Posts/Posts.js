import axios from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";

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
      setPosts(newPostList)
    } catch (err) {
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
              Post Title
              <Link to="/New">
                <button className="postAdd">add+</button>
              </Link>
            </div>
            {posts.map((item, index) => (
              <div className="postValue" key={item.id}>
                {item.post}
                <div className="postInfo">
                  <div className="postNumber" key={item.id}>
                    post #{index + 1}
                  </div>
                  <div className="postTopic" key={item.id}>
                  Topic:
                  {item.topics.map ((item ) => (
                  <div>
                     {item?.title}
                  </div>
                  ))}
                  </div>
                  <div className="postDate" key={item.id}>
                    created at {item.createdAt}
                  </div>
                  <div className="postAuthor">Author {item?.user?.name}</div>
                  <button
                    className="postDelete"
                    onClick={() => deletePost(item.id)}
                  >                 
                    delete
                  </button>
                  <Link to={`/PostEdit/${item.id}`}>
                    <button className="postEdit">edit</button>
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
