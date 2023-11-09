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
        border-radius: 5px;       
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
        margin: 5px;       
    }
    .postInfo {
        display: flex;
        justify-content: space-between;
        border: 1px solid orange;
    }
    .postNumber {
        border: 1px solid orange;
        padding: 5px;
        margin: 5px;   
    }
    .postTopic {
        border: 1px solid gray;
        padding: 5px;
        margin: 5px;   
    }        
    .postDate {
        border: 1px solid orange;
        padding: 5px;
        margin: 5px;   
    }
    .postAuthor {
        border: 1px solid orange;
        padding: 5px;
        margin: 5px;   
    }
    .postButtonSave {
        padding: 5px;
        margin: 5px;   
        width: 10%;
    }    
`;
export default PostEditStyled;
