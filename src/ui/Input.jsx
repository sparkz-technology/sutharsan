import styled from "styled-components";

const Input = styled.input`
    border: 1px solid var(--border-color);
    border-radius: 7px;
    padding: 0.5rem;
    width: 100%;
    font-size: 1.2rem;
    color: var(--text-color);
    background-color: var(--main-background-color);
    caret-color: var(--title-color);
    &:focus {
        outline: none;
        border-color: var(--title-color);
    }
    &::placeholder {
        color: var(--text-color);
    }
    &::file-selector-button {
        background-color: var(--button-background-color);
        border: none;
        color: #fff;
        padding: 0.5rem;
        border-radius: 7px;
        cursor: pointer;
    }    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem;
    }
    `;

export default Input;