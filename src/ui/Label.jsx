import styled from "styled-components";

const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
    color: var(--text-color);
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
    `;

export default Label;