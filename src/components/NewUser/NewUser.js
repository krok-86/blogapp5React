import NewUserStyled from "./NewUserStyled";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg"

const NewUser = () => {

    return (
        <NewUserStyled>
          
    <div className="user-value">        
        <div className="user-text">new user</div>
        <div className="user">
        <img src = {unknown} alt="unknown" />
        
        
        </div>
        <div className="user2">
<input className="user-input" placeholder="name"></input>
<input className="user-input" placeholder="email"></input>
<input className="user-input" placeholder="password"></input>
        <Button className="user-button"
        //   handleClick={handleClick}
          name="registration"
        />
        {/* <Link to={`/postEdit/${post.id}`}>
          <Button name="Edit" />
        </Link> */}
      {/* </div> */}
      
      </div>
      
    </div>    
        </NewUserStyled>
    )
}
export default NewUser;