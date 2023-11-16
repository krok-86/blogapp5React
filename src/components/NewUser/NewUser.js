import NewUserStyled from "./NewUserStyled";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg";
import { postUsers, postUserAuth } from "../../api/postApi";
import { successToast, errorToast } from "../Utilities/toasts";


const NewUser = ({ isRegistration }) => {
  const navigate = useNavigate(); 

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const submitForm = async (value) => {
    try {
      console.log(value);
      const body = {
        ...value,
        name: value.name,
        email: value.email,
        password: value.password,
      };
      console.log(body);
      if (isRegistration) {
        await postUsers(body);
        successToast("User is created");
      } else {
        const userData = await postUserAuth(body);        
        const userValue = {
          id: userData.data.id, 
          name: userData.data.name, 
          email: userData.data.email
        }
        localStorage.setItem('userValue', JSON.stringify(userValue));        
        successToast("User is authorized");        
        
      }
      navigate("/");
    } catch (err) {
      errorToast(err.response.data.message);
      console.log(err);
    }
  };
  const resetForm = () => {
    reset();
  };
  
  const title = isRegistration ? "Registration" : "Authorization";
 
  return (
    <NewUserStyled>
      <div className="user-value">
        <div className="user-text">{title}</div>
        <div className="user-img-wrap">
          <form onSubmit={handleSubmit(submitForm)}>
            {isRegistration && (
              <input
                className="user-input"
                placeholder="name"
                type="text"
                {...register("name", { required: true })}
              ></input>
            )}
            <input
              className="user-input"
              placeholder="email"
              type="text"
              {...register("email", { required: true })}
            ></input>
            <input
              className="user-input"
              placeholder="password"
              type="password"
              {...register("password", { required: true })}
            ></input>
            <>
            <Button
              className="user-button"
              //   handleClick={handleClick}
              name="submit"
            />
            <Button name="clear form" handleClick={resetForm} />
            {isRegistration && (
              <Link to="/auth">
                <Button className="user-button" name="authorization" />
              </Link>
            )}
            </>
          </form>
          <img src={unknown} alt="unknown" className="user-img" />
        </div>
      </div>
    </NewUserStyled>
  );
};
export default NewUser;
