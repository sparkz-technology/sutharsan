import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";

import { useDarkMode } from "../features/Navbar/DarkModeContext";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  display: flex;
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
