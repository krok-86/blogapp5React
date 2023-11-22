import NewUserStyled from "./NewUserStyled";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg";
import { postUserReg, postUserAuth } from "../../api/postApi";
import { successToast, errorToast } from "../Utilities/toasts";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";


const NewUser = ({ isRegistration }) => {
  const navigate = useNavigate(); 

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    setError,
    formState: { errors, isValid }, 
  } = useForm({
    defaultValues: {
      name: '',
      email: 'formalin@mail.ru',//test
      password: 'formalin',// test
    },   
    mode: "onChange"
  });

  const submitForm = async (value) => {
   
    try {      
      const body = {
        ...value,
        name: value.name,
        email: value.email,
        password: value.password,
      };      
      if (isRegistration) {
        await postUserReg(body);
        successToast("User is created");
      } else {          
        const data = await dispatch(fetchAuth(value));
        if ('token' in data.payload) {
          window.localStorage.setItem('token', data.payload.token)
        } else { alert ("Wrong!!!!!!!!!!!")}
        // const userData = await postUserAuth(body); 
        // const userValue = {
        //    id: userData.data.id, 
        //    name: userData.data.name, 
        //    email: userData.data.email
        //  }
       
          // dispatch(fetchAuth(body)) 
        // localStorage.setItem('userValue', JSON.stringify(userValue));        
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
                className={errors.name ? "user-input error" : "user-input"}
                placeholder="name"
                label="Name"
                type="text"
                {...register("name", { required: "add name" })}
              />
            )}
            <input
              className={errors.email ? "user-input error" : "user-input"}
              placeholder="email"
              label="E-mail"
              type="email"
              {...register("email", { required: "add email" })}
              fullWidth //?
            />
            <input
              className={errors.password ? "user-input error" : "user-input"}
              placeholder="password"
              label="Password"
              error={Boolean(errors.password?.message)}//??? not work
              helperText={errors.password?.message}// is it correct? may be toast
              type="password"
              {...register("password", { required: "add password" })}
              fullWidth //?
            ></input>
            <div>
            <Button
              className="user-button"
              //   handleClick={handleClick}
              type="submit"//??
              name="submit"//??
            />
            <Button name="clear form" handleClick={resetForm} />
            {isRegistration && (
              <Link to="/auth">
                <Button className="user-button" name="authorization" />
              </Link>
            )}
            </div>
          </form>
          <img src={unknown} alt="unknown" className="user-img" />
        </div>
      </div>
    </NewUserStyled>
  );
};
export default NewUser;
