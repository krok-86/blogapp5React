import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from 'axios'

const NewPost = () => {
  const [data,setData] = useState("");  
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    defaultValues: {},
  });
 const error = (data) => {
  console.log(data)
 }
 console.log(data)
  const submit = async (value) => {
   try{ await  axios.post('http://localhost:3003/blog/posts', value)}
   catch (err) { console.log(err) }
}
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
