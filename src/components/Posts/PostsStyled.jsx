import styled from "styled-components";

const PostsStyled = styled.div`
  .postsArea {
    display: flex;
    flex-direction: column;
    width: 716px;
    height: 100%;
    border: 2px solid #d5dde0;
    border-radius: 20px;
    margin: 20px auto;
  }
  .postsArea:hover {
    box-shadow: 1px 2px 3px gray;
    border: 0px solid #ffffff;
  }
  .postsHead {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: #72a0c6;
  }
  .postBody {
    border-top: 1px solid #72a0c6;
    padding: 5px;
    margin: 5px;
  }
  .postValue {
    padding: 0px 20px 20px 20px;
    margin: 5px;
    color: #757575;    
  }
  .postText {
    word-break: break-word;
  }
  .postTitle {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border: none;
  }
  .postAddButton {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: #72a0c6;
    color: white;
    border: none;
    &:hover {
      opacity: 0.7;
    }
  }
  .postInfo {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #72a0c6;
  }
  .postNumber {
    padding: 5px;
    margin: 5px;
  }
`;

export default PostsStyled;
