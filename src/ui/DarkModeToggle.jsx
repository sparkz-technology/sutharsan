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
  border-radius: 50%;
  box-shadow: 0 0 3px 2px transparent; 
  transition: all 0.2s ease-in-out;
  outline: none;

  @media screen and (max-width: 768px) {
    border-radius: 100%;
    padding: 0.2rem;
  }
  &:active {
    animation: spin 1s linear infinite;
    transform-origin: center;
    transition: all 0.2s ease-in-out;
  }

  @keyframes spin {
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    80% {
      transform: rotate(288deg);
    }
    90% {
      transform: rotate(324deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SunIcon = styled(HiOutlineSun)`
  color: var(--anime-moon);
`;

const MoonIcon = styled(HiOutlineMoon)`
  color: var(--anime-sun);
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <SunIcon size={window.innerWidth <= 768 ? 20 : 30} /> : <MoonIcon size={window.innerWidth <= 768 ? 20 : 30} />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
