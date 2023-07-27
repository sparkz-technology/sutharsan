/* eslint-disable react/prop-types */
// import styles from "./Button.module.css";
import styled from "styled-components";
const StyledButton = styled.button`
  margin-bottom: 10px;
  align-items: center;
  background-color: var(--Light-Navy);
  border: 2px solid var(--color-Green);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--color-Green);
  cursor: pointer;
  font-family: "Delicious Handrawn", cursive;
  font-size: 1rem;
  height: 40px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    background-color: var(--color-Green);
    border-radius: 8px;
    content: "";
    display: block;
    height: 40px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);

    transition: transform 0.2s ease-out;

    z-index: -1;
  }
  &:hover:after {
    transform: translate(0, 0);
  }
  &:active {
    background-color: var(--color-Green);
    color: var(--Light-Navy);
    outline: 0;
  }
  &:hover {
    outline: 0;
  }
  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
