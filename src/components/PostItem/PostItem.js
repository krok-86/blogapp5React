import PostItemStyled from "../PostItem/PostItemStyled";
import {format} from "date-fns";
import { enGB } from "date-fns/esm/locale";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const postItem = ({post,handleClick}) => {//corr name func
const date = format(new Date(post.createdAt), 'MMM d, yyyy', {locale: enGB});
  return (
  <PostItemStyled>
  <div className="post-value">
      
      <div className="post-info">        
        <div className="post-number">
          Post #{post.id}
        <div className="post-number post-topic">
          Topic:
          {post.topics.map((item) => (
            <div key={item.id}>{item?.title}</div>
          ))}
        </div>
        <div className="post-number">
          <div>Created at</div><div>{date}</div> 
        </div>
        <div className="post-number">Author {post?.user?.name}</div>
        <Button
          handleClick={handleClick}
          name="Delete"
        />
        <Link to={`/postEdit/${post.id}`}>
          <Button name="Edit" />
        </Link>
      </div>
      <pre className="post-text">{post.post}</pre>
    </div>
  </div>
  </PostItemStyled>
  )
}
export default postItem;