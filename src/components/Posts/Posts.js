import PostsStyled from "./PostsStyled";

const Posts = () => {
  return (
    <PostsStyled>
      <div className="postsArea">        
          <div className="postsHead">Posts:</div>          
          <div className="postBody">
          <div className="postValue"> 
          <div className="postTitle">Post Title</div>
            This is a new post or 'body' of post, whitch author able to edit and
            something add and ect.
          </div>
          <div className="postInfo">            
            <div className="postNumber">post #1</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:22.12.21</div>
            <div className="postAuthor">Author: Lex</div>
            <button className="postEdit">edit</button>
          </div>        
        </div>
        <div className="postBody">
          <div className="postValue"> 
          <div className="postTitle">Post Title</div>
            This is a new post or 'body' of post, which author able to edit and
            something add and ect.
          </div>
          <div className="postInfo">            
            <div className="postNumber">post #1</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:22.12.21</div>
            <div className="postAuthor">Author: Lex</div>
            <button className="postEdit">edit</button>
          </div>        
        </div>
        <div className="postBody">
          <div className="postValue"> 
          <div className="postTitle">Post Title</div>
            This is a new post or 'body' of post, whitch author able to edit and
            something add and ect.
          </div>
          <div className="postInfo">            
            <div className="postNumber">post #1</div>
            <div className="postTopic">Topic: sport</div>
            <div className="postDate">Date:22.12.21</div>
            <div className="postAuthor">Author: Lex</div>
            <button className="postEdit">edit</button>
          </div>        
        </div>
        </div>
    </PostsStyled>
  );
};
export default Posts;
