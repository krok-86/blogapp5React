import ButtonStyled from "./ButtonStyled";

const Button = ({name, handleClick}) => {

  return (
    <ButtonStyled>
<button className="postButton"
onClick={handleClick}
>{name}</button>
    </ButtonStyled>
  )
}
export default Button;