import PostItemStyled from "../PostItem/PostItemStyled";
import {format} from "date-fns";
import { enGB } from "date-fns/esm/locale";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const postItem = ({post,handleClick}) => {
const date = format(new Date(post.createdAt), 'MMM d, yyyy', {locale: enGB});
  return (
  <PostItemStyled>
  <div className="post-value">
      <pre className="post-text">{post.post}</pre>
      <div className="post-info">
        <div className="post-number">
          Post #{post.id}
        </div>
        <div className="post-number post-topic">
          Topic:
          {post.topics.map((item,index) => (
            <div key={`topics${index}`}>{item?.title}</div>
          ))}
        </div>
        <div className="post-number">
          Created at<br/> {date}
        </div>
        <div className="post-number">Author {post?.user?.name}</div>
        <Button
          handleClick={handleClick}
          name="Delete"
        />
        <Link to={`/PostEdit/${post.id}`}>
          <Button name="Edit" />
        </Link>
      </div>
    </div>
  </PostItemStyled>
  )
}
export default postItem;