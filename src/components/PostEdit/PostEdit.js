import React from "react";
import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";


const PostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // LET ? 

  const [postId, setPostId] = useState({}); // ?? postID setPostID
console.log(postId)
  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await axios.get(`http://localhost:3003/blog/posts/${id}`);//вроде перенёс

        //const postData = { ...result.data, postText: result.data.post };  //data

        /**
         * data = {
         *  message: 'asd',
         *  post: 'TEST',
         *  id: 1
         * }
         * 
         * newDate = {
         *  message: 'asd',
         *  post: 'TEST',
         *  id: 1,
         *  postText: 'TEST'
         * }
         */
        setPostId(result);//? postData
        console.log(result)
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataId(id);
  }, []);
  console.log(postId)
  

  const updatePost = (event) => {
    try {
      const newPost = { ...postId, postText: event.target.value};
      setPostId(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPost = async () => {
    try {
      await axios.put(`http://localhost:3003/blog/posts/${id}`, {
        postText: postId.text,//here
        
      });
      successToast("The post has been edited");
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const date = postId?.createdAt && format(new Date(postId.createdAt), 'MMM d, yyyy', {locale: enGB});
console.log(postId.post)
  return (
    <PostEditStyled>
      <div className="post-area">
        <div className="post-head">Edit form</div>
        <div className="post-body">
          <div className="post-title">Post content:</div>
            <textarea
              className="post-input"
              type="text"
              value={postId.postText}
              onChange={updatePost}              
              placeholder="Add new post"
              contenteditable="true"// check
              rows="1"
            >
              {postId.postText}
            </textarea>
          <div className="post-info">
            <div className="post-number">post #{postId.id}</div>
            {!!postId?.topics?.length && (
              <div className="post-topic">
                Topic:
                {postId?.topics?.map((item, index) => (
                  <div key={index.id}>{item?.title}</div>
                ))}
              </div>
            )}
            <div className="post-number">Date:{date}</div>
            {postId.user?.name?.length && (
              <div className="post-number">Author: {postId.user?.name}</div>
            )}
            <Button handleClick={sendPost} name="save" />
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;