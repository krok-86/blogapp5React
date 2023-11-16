import NewUserStyled from "./NewUserStyled";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg";
import { postUsers } from "../../api/postApi";
import { successToast, errorToast } from "../Utilities/toasts";
// import { useState } from "react";

const NewUser = ({ isRegistration }) => {
  // const [user, setUser] = useState({});
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });
  const submitForm = async (value) => {
    try {
      console.log(value); 
      const body = {...value, name: value.name, email: value.email, password: value.password};
      console.log(body);
      if (isRegistration) {
      await postUsers(body);
      successToast("User is created");
      return;
      }

      // вставить соединение с беком для аутентификации
      console.log('запрос на бек для аутентификации, должен вернуть данные юзера - его имя, почту, id')

      // navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(err);
    }
  };
  const resetForm = () => {
reset()
  }

const title = isRegistration ? 'Registration' : 'Authorization';

  return (
    <NewUserStyled>
      <div className="user-value">
        <div className="user-text">{title}</div>
        <div className="user-img-wrap">
          <form onSubmit={handleSubmit(submitForm)}>
            {isRegistration && <input className="user-input"
            placeholder="name"
            type="text"
            {...register("name", { required: true })}
            ></input>
  }
            <input className="user-input" 
            placeholder="email"
            type="text"
            {...register("email", { required: true })}
            ></input>
            <input className="user-input"
            placeholder="password"
            type="text"
            {...register("password", { required: true })}
            ></input>
            <Button
              className="user-button"
              //   handleClick={handleClick}
              name="submit"
            />
            {/* <Link to={`/postEdit/${post.id}`}> */}
          <Button name="clear form" 
          handleClick={resetForm}
          />
        {/* </Link> */}
            {/* </div> */}
          </form>
          <img src={unknown} alt="unknown" className="user-img" />
        </div>
      </div>
    </NewUserStyled>
  );
};
export default NewUser;
