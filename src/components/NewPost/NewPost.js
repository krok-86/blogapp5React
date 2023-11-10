import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [author, setAuthor] = useState("");

  const [topics, setTopics] = useState([]);

  const [topicData, setTopicData] = useState("");

  // console.log(topics)
  const userName = users.map((item) => ({ label: item.name, value: item.id }));
  // console.log(userName)
  const topicTitle = topics.map((item) => ({
    label: item.title,
    value: item.id,
  }));
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
      const body = { ...value, userId: author, topicId: topicData };
      await axios.post("http://localhost:3003/blog/posts", body);
      toast.success("Post is created", {
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
          <form onSubmit={handleSubmit(submitPosts, error)}>
            <input
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
              <button className="postButtonSend">Save</button>
              <button
                className="postButtonSend postButtonSend__clear"
                type="button"
                onClick={() => reset()}
              >
                Clear post
              </button>
            </div>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
