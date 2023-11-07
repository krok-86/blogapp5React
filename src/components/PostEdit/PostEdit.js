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
    const result = await axios.get (`http://localhost:3003/blog/posts/${id}`)
setPostId(result.data);
// fetchDataId(id);
} catch (err) {
  console.log(err)
}}
fetchDataId().catch(console.error)//is this?
}, []);

// const save = async (value) => {
//  try{ await axios.post('http://localhost:3003/blog/posts', value)}
//  catch (err) {console.log(err)}
// }


  return (
    <PostEditStyled>
      <div className="postsArea">
        <div className="postsHead">Post edit:</div>
        <div className="postBody">
        <div className="postTitle">Post Title</div>
        
          <input className="postValue"
           type ="text"          
            value = {postId.post}
          //  onChange={handleSave}
           > 
          </input>
          <div className="postInfo">
            <div className="postNumber">post #{postId.id}</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:{postId.createdAt}</div>
            <div className="postAuthor">Author: {postId.user?.name}</div>
            <button className="postSave">save</button>
          </div>
          
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
