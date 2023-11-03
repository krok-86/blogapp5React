import { useForm } from "react-hook-form";
import NewPostStyled from "../NewPost/NewPostStyled";



const NewPost = () => {
const {} =useForm()
  return (    
    <NewPostStyled>       
 <div className="postsArea">        
          <div className="postsHead">Add new post:</div>           
          <div className="postBody">         
          <form>
          <div className="postTitle">Add your name</div>
            <inpit type = "text" />           
            
          </form>   
          <form>
          <div className="postTitle">Add your surname</div>
            <inpit type = "test" />           
            
          </form>  
          <form>
          <div className="postTitle">Add post title</div>
            <inpit type = "text" />           
            
          </form> 
          <form>
          <div className="postTitle">Add post text:</div>
            <inpit type = "text" />           
            
          </form>      
          <input className="postValue">            
          </input>
          <div className="postNumber">choose a topic:
          <div>Sport</div>
          <div>News</div>
          <div>Culture</div>
          </div>
          <button className="PostButtonSend">Send</button>          
        </div>       
        </div>
    </NewPostStyled>   
  );
};
export default NewPost;