import React from 'react'
import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { toast } from 'react-toastify';
import Button from '../commoneComponents/Buttons/Button';

const PostEdit = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [postId, setPostId] = useState({});
  const [content, setContent] = React.useState("")

  const onContentChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])


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
      const newPost = { ...postId, postText: event.target.value };
      setPostId(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPost = async () => {
    try {
      await axios.put(`http://localhost:3003/blog/posts/${id}`, postId);
      toast.success('Post is updated', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/");
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
  
  return (
    <PostEditStyled>
      <div className="postsArea">
        <div className="postsHead">edit form</div>
        <div className="postBody">
          <div className="postTitle">Post content:</div>

          <ContentEditable
            className="postValue"
            onChange={(event) => updatePost(event)}
            onBlur={onContentChange}
            html={postId.postText}
          />
          <div className="postInfo">
            <div className="postNumber">post #{postId.id}</div>
            {!!postId?.topics?.length && <div className="postTopic">
              Topic:
              {postId?.topics?.map((item) => (
                <div>{item?.title}</div>
              ))}
            </div>
}
            <div className="postNumber">Date:{postId.createdAt}</div>
            {postId.user?.name?.length && <div className="postNumber">Author: {postId.user?.name}</div>}
            <Button handleClick={sendPost}
              name="save"
            />
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
