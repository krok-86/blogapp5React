import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from 'axios'

const NewPost = () => {
  const [data,setData] = useState("");  
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    defaultValues: {},
  });
  //  const submit = (value) => {
  //   setData(value)
  //    console.log(value);
  //  };
 const error = (data) => {
  console.log(data)
 }
 console.log(data)
 
  const submit = (value) => {
    // value.preventDefault();
    const formData = new FormData(value.target);
    // setData(value)
    //  console.log(value);
   
      axios.post('http://localhost:3003/blog/posts', formData)

  .then((response) => {
    setData(response.data)
    console.log(data)
  })
}
// useEffect(() => {
  // axios.post('http://localhost:3003/blog/posts', )
// const blogUrl = 'http://localhost:3003/blog/posts'
// axios.post(blogUrl).then((resp) => {
//   const users = resp.data;
//   setAppState(users);
//  },[setData])
  return (
    <NewPostStyled>
      <div className="postsArea">
        <div className="postsHead">Add new post:</div>
        <div className="postBody">
          <form onSubmit={handleSubmit(submit, error)}>
            <div className="postTitle">Add your userId:</div>
            <input type="number"
            {...register('userId', {required: true})}
             aria-invalid={errors.name ? true : false}             
             />
            {/* <div className="postTitle">Add post title:</div>
            <input type="text" {...register('title', {required: true})}/> */}
            <div className="postTitle">Add postText:</div>
            <input type="text" {...register('postText', {required: true})}/>          
          <div className="postNumber">
            choose a topic:
            <div>Sport</div>
            <div>News</div>
            <div>Culture</div>
          </div>
          <button className="PostButtonSend">Send</button>
          <button className="PostButtonSend"
          type="button"
          onClick={() => reset()}
          >clear all</button>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
