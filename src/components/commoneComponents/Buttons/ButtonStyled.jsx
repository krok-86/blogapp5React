import styled from 'styled-components';

const ButtonStyled = styled.div`
.postButton {

        padding: 5px;
        margin: 5px;
        min-width: 40px;
        min-height: 40px;
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
`
export default ButtonStyled;