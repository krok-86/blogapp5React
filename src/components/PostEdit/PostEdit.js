import PostEditStyled from "./PostEditStyled";
import { useParams } from "react-router-dom";

const PostEdit = () => {
  let { id } = useParams();
  return (
    <PostEditStyled>
      <div className="postsArea">
        <div className="postsHead">Post edit:</div>
        <div className="postBody">
        <div className="postTitle">Post Title</div>
          <input className="postValue">
          </input>
          <div className="postInfo">
            <div className="postNumber">post #1</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:22.12.21</div>
            <div className="postAuthor">Author: Lex</div>
            <button className="postSave">save</button>
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
