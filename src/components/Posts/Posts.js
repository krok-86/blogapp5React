import axios from "axios";
import { useEffect, useState } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";

const Posts = () => {
  const  [posts, setPosts] = useState([]);
  useEffect(() => {
const fetchData = async () => {
  const result = await axios.get ('http://localhost:3003/blog/posts')
  setPosts(result.data);
  };
  fetchData();
  },[]);
  return (
    <PostsStyled>
      <div className="postsArea">
          <div className="postsHead">Posts:</div>
          <div className="postBody">
          <div className="postValue">
          <div className="postTitle">Post Title
          <Link to='/New'><button className="postAdd">add+</button></Link>
          </div>
            {posts.map((item, index)=> (
              <div className="postValue" key={item.id}>{item.post}
              <div className="postInfo">
              <div className="postNumber" key={item.id}>post #{index+1}</div>
              <div className="postTopic" key={item.id}>Topic:</div>
              <div className="postDate" key={item.id}>created at {item.createdAt}</div>
              <div className="postAuthor">Author {item?.user?.name}</div>
             <Link to={`/PostEdit/${item.id}`}><button className="postEdit">edit</button></Link>
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
