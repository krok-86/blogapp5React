import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from 'axios'
import Select from 'react-select'

const NewPost = () => {

  const [data,setData] = useState("");  

  const [users, setUsers] = useState([])
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  const userName = users.map((item) => ({ label: item.name, value: item.id }));
  console.log(userName)
  const { 
    register,
     handleSubmit,
      reset,
       formState: {errors},
       } = useForm({
    defaultValues: {},
  });
 const error = (data) => {
  console.log(data)
 }
 const options = userName

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3003/blog/users");
        setUsers(result.data);
      } catch (err) {
        console.log(">>>>>>", err);
      }
    };
    fetchData();
  }, []);

  const submit = async (value) => {
   try{ 
    await  axios.post('http://localhost:3003/blog/posts', value)
    console.log(value)
  } catch (err) {
    console.log(err)
    }    
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
            
            <Select options={options} 
            onChange= {(value) => {
              submit('userId', value)
              setUsers(value)
            }}
            />

            {/* <label>
            Select name:
            <select>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label> */}

          {/* <div className="postNumber">
            choose a topic:
            <div>Sport</div>
            <div>News</div>
            <div>Culture</div>
          </div> */}

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
