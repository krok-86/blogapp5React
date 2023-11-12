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
  let { id } = useParams();

  const [postId, setPostId] = useState({});

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3003/blog/posts/${id}`
        );
        const postData = { ...result.data, postText: result.data.post }; //data
        setPostId(postData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataId(id);
  }, []);

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
      await axios.put(`http://localhost:3003/blog/posts/${id}`, postId);
      successToast("The post has been edited");
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const date = postId?.createdAt && format(new Date(postId.createdAt), 'MMM d, yyyy', {locale: enGB});

  return (
    <PostEditStyled>
      <div className="post-area">
        <div className="post-head">Edit form</div>
        <div className="post-body">
          <div className="post-title">Post content:</div>
            <textarea
              className="post-input"
              type="text"
              onChange={updatePost}
              placeholder="Add new post"
            >
              {postId.postText}
            </textarea>
          <div className="post-info">
            <div className="post-number">post #{postId.id}</div>
            {!!postId?.topics?.length && (
              <div className="post-topic">
                Topic:
                {postId?.topics?.map((item, index) => (
                  <div key = {`date${index}`}>{item?.title}</div>
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