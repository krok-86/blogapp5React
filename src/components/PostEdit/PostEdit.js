import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostEdit = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [postId,setPostId] = useState({});


  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3003/blog/posts/${id}`
        );
        const postData = {...result.data, postText: result.data.post}//data
        setPostId(postData);

      } catch (err) {
         console.log(err)
      }
    };
    fetchDataId(id);
  }, []);

const updatePost = (event) => {
  try {
  const newPost = {...postId,postText: event.target.value};
  setPostId(newPost);
  } catch(err) {
    console.log(err)
  }
}

const sendPost = async () => {
  try {    
    await axios.put(`http://localhost:3003/blog/posts/${id}`, postId);
    navigate("/");
  } catch (err) {
    console.log(">>>>>>>>>>>>>>>>", err);
  }
}

  return (
    <PostEditStyled>
      <div className="postsArea">
        <div className="postsHead">Post edit:</div>
        <div className="postBody">
          <div className="postTitle">Post Title</div>

          <input
            className="postValue"
            type="text"
            value={postId.postText}
            onChange={(event) => updatePost(event)}
          ></input>
          <div className="postInfo">
            <div className="postNumber">post #{postId.id}</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:{postId.createdAt}</div>
            <div className="postAuthor">Author: {postId.user?.name}</div>
            <button
              className="postSave"
              onClick={sendPost}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
