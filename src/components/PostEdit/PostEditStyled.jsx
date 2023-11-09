import styled from "styled-components";

const PostEditStyled = styled.div`
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
    /* .postsArea:focus {
        border: none; 
    } */
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
    .postValue {        
        padding: 20px;
        margin-top: -2em;      
        color:#757575; 
        
    }
    .postValue:focus {
            outline:none 
    } 
    .postTitle {       
        padding: 5px;
        margin: 5px 5px 20px 5px;
        padding: 15px;
    }
    .postInfo {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid grey;
    }
    .postNumber {
        /* border: 1px solid orange; */
        padding: 5px;
        margin: 5px;
        display: flex;
        text-align: center;
        border-radius: 10px;
    }
    .postTopic {
        padding: 5px;
        margin: 5px;   
    }
    .postButtonSave {
        padding: 5px;
        margin: 5px;
        width: 10%;
        border-radius: 10px;
        border: none;
        cursor:  pointer;
        height: 40px;
        background-color: #72a0c6;
        color: white;
        &:hover{
            opacity: 0.7;
        }
    }    
`;
export default PostEditStyled;
