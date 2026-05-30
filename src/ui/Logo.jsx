import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/TefoDark.png" : "/TefoLight.png";

  return (
    <StyledLogo>
      <Img src={src} alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;
