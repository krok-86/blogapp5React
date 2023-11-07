import styled from 'styled-components';

const PostsStyled = styled.div`
    
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
        padding: 5px;
        margin: 5px;
    }
    .postBody {
        border: 1px solid purple;
        padding: 5px;
        margin: 5px;
    }    
    .postValue {
        border: 1px solid green;
        padding: 20px;
        margin: 5px;        
    }
    .postTitle {
        border: 1px solid green;
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
    .postEdit {
        text-align:center;
        padding: 10px;
        margin: 5px;   
        width: 40px;
    }
    .postAdd {
        padding: 5px;
        margin: 5px;   
        width: 10%;
    }    
`

export default PostsStyled;
