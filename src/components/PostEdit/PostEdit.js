import React from "react";
import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getPostById, putPostById } from "../../api/postApi";


const PostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({}); // ?? postID setPostID

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await getPostById(id);
        // const result = await axios.get(`http://localhost:3003/blog/posts/${id}`);//вроде перенёс

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
        setPostData(result.data);//? postData
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataId(id);
  }, []);
  console.log(postData)
  
  const updatePost = (event) => {
    try {
      const newPost = { ...postData, post: event.target.value};
      setPostData(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPost = async () => {
    try {
      const result = await putPostById(id, {
        postText: postData.post,//here
        
      });
      result =  {kpostText: postData.post}
      await axios.put(`http://localhost:3003/blog/posts/${id}`, {
        postText: postData.post,//here
        
      });
      successToast("The post has been edited");
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const date = postData?.createdAt && format(new Date(postData.createdAt), 'MMM d, yyyy', {locale: enGB});

  return (
    <PostEditStyled>
      <div className="post-area">
        <div className="post-head">Edit form</div>
        <div className="post-body">
          <div className="post-title">Post content:</div>
            <textarea
              className="post-input"
              type="text"
              value={postData.post}
              onChange={updatePost}              
              placeholder="Add new post"
              // contentEditable="true"// check
              rows="1"
            >
              {postData.post}
            </textarea>
          <div className="post-info">
            <div className="post-number">post #{postData.id}</div>
            {!!postData?.topics?.length && (
              <div className="post-topic">
                Topic:
                {postData?.topics?.map((item) => (
                  <div key={item.id}>{item?.title}</div>
                ))}
              </div>
            )}
            <div className="post-number">Date:{date}</div>
            {postData.user?.name?.length && (
              <div className="post-number">Author: {postData.user?.name}</div>
            )}
            <Button handleClick={sendPost} name="save" />
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;