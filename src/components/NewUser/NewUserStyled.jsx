import styled from "styled-components";

const NewUserStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
  .user-value {  
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    padding: 0px 20px 20px 20px;
    margin: 5px;
    color: #757575;    
    border: 2px solid #d5dde0;
    border-radius: 20px;
    border: 2px solid red//////////////////////////
  }
  .user-value:hover {
    box-shadow: 1px 2px 3px gray;
    border: 2px solid transparent;    
  }
  .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: #72a0c6;    
  }
 
  .user-input {
    width: 60%;
    margin: 10px;
    border-radius: 20px;
    padding: 10px;
    background-color: #ececec; 
    border: none;
  }  
    .user-button {
   width: 30%;
  } 
  .user {
    border: 2px solid red//////////////////////////
  }    
  .user2 {
    border: 2px solid green//////////////////////////
  }
`
export default NewUserStyled;