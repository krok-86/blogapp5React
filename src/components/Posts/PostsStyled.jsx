import styled from "styled-components";

const PostsStyled = styled.div`
  .postsArea {
    /* display: flex;
    flex-direction: column;     */
    width: 716px;
    height: 100%;
    border: 2px solid #d5dde0;
    border-radius: 20px;
    margin: 20px auto;
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
    display: flex; 
    flex-direction: column-reverse;
    justify-content: space-evenly; 
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

`;

export default PostsStyled;
