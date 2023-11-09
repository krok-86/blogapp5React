import styled from "styled-components";

const NewPostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  .postsArea {
    display: flex;
    flex-direction: column;
    width: 716px;
    height: 100%;
    border: 2px solid #d5dde0;
    border-radius: 20px;
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
        color: #72a0c6 
    }
    .postBody {
        padding: 5px;
        margin: 5px;
    }      
    .postAuthor {
        border: 1px solid blueviolet;
        padding: 5px;
        margin: 20px 5px 5px 5px;
    }
    .postValue {
        border: 1px solid green;
        padding: 20px;
        margin: 5px;        
    }
    .postNumber {
        border: 1px solid orange;
        padding: 5px;
        margin: 5px;   
    }
    .postButtonSend {
        padding: 5px;
        margin: 5px;   
        width: 10%;
    }

    .createSelect{
      margin: 10px 0;
    }

    .editButtons {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .postButtonSend{
      height: 40px;
      border-radius: 10px;
      border: none;
      background-color: #72a0c6;
      color: white;
      &__clear {
        background-color: #e59d95;
      }

    }

    input {
      width: 100%;
    }
`
export default NewPostStyled;
