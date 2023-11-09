import styled from "styled-components";

const Button = styled.button`
  background-color: var(--button-background-color);
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--button-background-hover-color);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:active {
    background-color: var(--button-background-hover-color);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(0px);
  }
  &:disabled {
    background-color: var(--button-background-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(0px);
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 20px;
    margin: 2px 1px;
  }
`;

export default Button;
