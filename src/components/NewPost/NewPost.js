import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { postPosts, getUsers, getTopics } from "../../api/postApi";

const NewPost = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);

  const [author, setAuthor] = useState(null);
  const [topicData, setTopicData] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const savedUser = JSON.parse(localStorage.getItem('userValue'));
  // setAuthor(savedUser);
// console.log(author)
  // const userName = users.map((item) => ({ label: item.name, value: item.id }));

  const topicTitle = topics.map((item) => ({
    label: item.title,
    value: item.id,
  }));
console.log(savedUser.id)
  const submitPosts = async (value) => {
    try {
      const body = { ...value, userId: savedUser.id, topicId: topicData.value };
      console.log(topicData.value); 
      console.log(savedUser.id); 
      await postPosts(body);
      successToast("Post is created");
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(err);
    }
  };

  // const handleSelectUser = (author) => {
  //   setAuthor(author);
  // };

  const handleSelectTopic = (theme) => {
    setTopicData(theme);
  };

  const resetSelections = () => {
    // setAuthor(null);
    setTopicData(null);
    reset();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {        
        const result = await getUsers();
        setUsers(result.data);
      } catch (err) {
        errorToast(err.response.data.message);
        console.log(">>>>>>", err);
      }
    };
    fetchUsers();
  }, []);

  // console.log("users>>>>>>>>", users);

  useEffect(() => {
    const fetchTopics = async () => {
      try {        
        const result = await getTopics();
        setTopics(result.data);
      } catch (err) {
        errorToast(err.response.data.message);
        console.log(">>>>>>", err);
      }
    };
    fetchTopics();
  }, []);

  return (
    <NewPostStyled>
      <div className="post-area">
        <div className="post-head">Add new post:</div>
        <div className="post-body">
          <form onSubmit={handleSubmit(submitPosts)}>
            <textarea
              className="post-input"
              type="text"
              {...register("postText", { required: true })}
              placeholder="Add new post"
            />
            {/* <Select
              className="post-select"
              options={userName}
              onChange={(value) => handleSelectUser(value)}
              placeholder="Select author..."
              value={author}
            /> */}
            <div>{savedUser.name}</div>
            <Select
              className="post-select"
              options={topicTitle}
              onChange={(value) => handleSelectTopic(value)}
              placeholder="Select topic..."
              value={topicData}
            />
            <div className="post-buttons">
              <Button className="post-button" name="Save" />
              <Button
                className="post-button post-button__clear"
                handleClick={resetSelections}
                name="Clear post"
              />
            </div>
          </form>
        </div>
      </div>
    </NewPostStyled>
  );
};
export default NewPost;
