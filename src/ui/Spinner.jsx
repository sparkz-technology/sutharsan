import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;


const SpinnerAnimation = styled.div`
    border: 4px solid transparent;
    border-top-color: var(--loader-color);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: ${spin} 0.8s linear infinite;
`;

function Spinner() {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <SpinnerAnimation />
        </div>
    )
}

export default Spinner



