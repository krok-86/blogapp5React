import styled from "styled-components";

const PostsStyled = styled.div`
  .posts-area {
    /* display: flex;
    flex-direction: column;     */
    width: 716px;
    height: 100%;
    border: 2px solid #d5dde0;
    border-radius: 20px;
    margin: 20px auto;
  }
  .posts-head {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: #72a0c6;
  }
  .post-body {    
    border-top: 1px solid #72a0c6;
    padding: 5px;
    margin: 5px;    
  }
  .post-user {
    display: flex;
    justify-content: end;
    font-size: 10px;
    margin: 10px;
    color: #8dd68d;    
  }
  .post-user-logOut {
    display: flex;
    justify-content: end;
    font-size: 12px;
    margin: 10px;
    color: #f14630;
    cursor: pointer;
  }
  .post-value {
    display: flex; 
    flex-direction: column-reverse;
    justify-content: space-evenly; 
  }
  .post-button-area {
    display: flex;
    justify-content: space-between;   
  }
  /* .post-title {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border: none;
  } */
  .post-add-button {
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
