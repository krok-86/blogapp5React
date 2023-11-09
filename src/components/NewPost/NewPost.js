import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
 
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [author, setAuthor] = useState("");

  const [topics, setTopics] = useState([]);

  const [topicData, setTopicData] = useState("");

// console.log(topics)
  const userName = users.map((item) => ({ label: item.name, value: item.id }));
  // console.log(userName)
  const topicTitle = topics.map((item) => ({ label: item.title, value: item.id }));
  // console.log(topicTitle)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const error = (data) => {
    console.log(data);
  };

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
      const body = { ...value, userId: author, topicId: topicData};
      await axios.post("http://localhost:3003/blog/posts", body);
      navigate("/");
      console.log(">>>>>>>>>",body)
    } catch (err) {
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
        <div className="postsHead">Add new post:</div>
        <div className="postBody">
          <form onSubmit={handleSubmit(submitPosts, error)}>
            {/* <input type="number"
            {...register('userId', {required: true})}
             aria-invalid={errors.name ? true : false}
             /> */}
            <div className="postTitle">Add postText:</div>
            <input type="text" {...register("postText", { required: true })} />
            <div className="postAuthor">Select author:</div>
            <Select
              options={userName}
              onChange={(value) => handleSelectUser(value)}
            />
            <div className="postAuthor">Select topic:</div>
            <Select
            options={topicTitle}
            onChange={(value) => handleSelectTopic(value)}
            />
            <button className="PostButtonSend">Send</button>
            <button
              className="PostButtonSend"
              type="button"
              onClick={() => reset()}
            >
              clear all
            </button>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
