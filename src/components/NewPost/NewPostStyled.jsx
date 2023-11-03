import styled from "styled-components";

const NewPostStyled = styled.div`
    .postsArea {
        height: 100%;
        border: 2px solid black;
    }
    .postsHead {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        font-weight: 900;
        border: 1px solid red;
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;
    }
    .postBody {
        border: 1px solid purple;
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;
    }  
    .postTitle {
        border: 1px solid green;
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;       
    }
    .postValue {
        border: 1px solid green;
        padding: 20px 20px 20px 20px;
        margin: 5px 5px 5px 5px;        
    }
    .postNumber {
        border: 1px solid orange;
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;   
    }
    .postButtonSend {
        padding: 5px 5px 5px 5px;
        margin: 5px 5px 5px 5px;   
        width: 10%;
    }
`
export default NewPostStyled;
