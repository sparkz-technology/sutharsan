import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import styled from "styled-components";


const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background:transparent;
    border: none; 
    cursor: pointer;
    position: absolute;
    top: 2rem;
    left: 2rem;
    outline: none;
    color:var(--github-button-color);
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5rem;
    border: 1px solid #bdbdbd;
    transition: color 0.3s ease-in-out;
    gap: 1rem;
    transition: background 0.3s ease-in-out;
`;


function BackButton() {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={() => navigate("/")}>
                <IoChevronBack size={20} />
            </Button>
        </ >
    )
}

export default BackButton
