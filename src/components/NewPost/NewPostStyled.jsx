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
    color: #72a0c6;
  }
  .postBody {
    padding: 5px;
    margin: 5px;
  }
  .postInput {
    display: block;
  width: 96%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .createSelect {
    margin: 10px 0;
  }
  .editButtons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .postButtonSend {
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
`;
export default NewPostStyled;
