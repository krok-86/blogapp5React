import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import {successToast, errorToast} from "../Utilities/toasts"

const NewPost = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [author, setAuthor] = useState("");

  const [topics, setTopics] = useState([]);

  const [topicData, setTopicData] = useState("");

  
  const userName = users.map((item) => ({ label: item.name, value: item.id }));
  
  const topicTitle = topics.map((item) => ({
    label: item.title,
    value: item.id,
  }));
 
  const {
    register,
    handleSubmit,
    reset,        
  } = useForm({
    defaultValues: {},
  });
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:3003/blog/users");
        setUsers(result.data);
      } catch (err) {
        console.log(">>>>>>", err);
      }
    };
    fetchUsers();
  }, []);

  const submitPosts = async (value) => {
    try {
      const body = { ...value, userId: author, topicId: topicData };
      await axios.post("http://localhost:3003/blog/posts", body);
      successToast();
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message)
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const result = await axios.get("http://localhost:3003/blog/topics");
        setTopics(result.data);
      } catch (err) {
        console.log(">>>>>>", err);
      }
    };
    fetchTopics();
  }, []);

  const handleSelectUser = (author) => {
    setAuthor(author.value);
  };

  const handleSelectTopic = (theme) => {
    setTopicData(theme.value);
  };

  return (
    <NewPostStyled>
      <div className="postsArea">
        <div className="postsHead">add new post:</div>
        <div className="postBody">
          <form onSubmit={handleSubmit(submitPosts)}>
            <textArea
              className="postInput"
              type="text"
              {...register("postText", { required: true })}              
              placeholder="add new post"
            />
            <Select
              className="createSelect"
              options={userName}
              onChange={(value) => handleSelectUser(value)}
              placeholder="Select author..."
            />
            <Select
              className="createSelect"
              options={topicTitle}
              onChange={(value) => handleSelectTopic(value)}
              placeholder="Select topic..."
            />
            <div className="editButtons">
              <Button 
              className="postButtonSend"
              name = "save"/>
              <Button
                className="postButtonSend postButtonSend__clear"
                handleClick={() => reset()}
                name = "clear post"
              />
            </div>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
