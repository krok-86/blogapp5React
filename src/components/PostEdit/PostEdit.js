import PostEditStyled from "./PostEditStyled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostEdit = () => {
  let { id } = useParams();

  const [postId,setPostId] = useState([]);

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3003/blog/posts/${id}`
        );
        setPostId(result.data);
        // fetchDataId(id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataId().catch(console.error); //is this?
  }, []);

const updatePost = (value) => {
  const newPost = {...postId,postText,userId,value}  
  setPostId(newPost)
}

const sendPost = async () => {
  try {
    await axios({
      url: `http://localhost:3003/blog/posts/${id}`,
      params: { postId },
      method: "PUT",
    });
  } catch (err) {
    console.log(">>>>>>>>>>>>>>>>", err);
  }
}

  // const savePost =  () => {
  //  setPostId=postId.post
  // }
  // console.log(postId);
  //   const handleSave = (value) => {
  //     if (value) {
  //       console.log(value);
  //       setPostId();
  //     }
  //   };
  // const handleSave = async (value) => {
  //   try {
  //     await axios.post("http://localhost:3003/blog/posts", value);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <PostEditStyled>
      <div className="postsArea">
        <div className="postsHead">Post edit:</div>
        <div className="postBody">
          <div className="postTitle">Post Title</div>

          <input
            className="postValue"
            type="text"
            value={postId.post}
            onChange={updatePost}
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
