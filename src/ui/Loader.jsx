import styled from "styled-components";

const LoaderWrapper = styled.div`
  border-radius: 10px;
  background-color: var(--background-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;

const LoaderAmimation = styled.div`

  width: 80px;
  height: 60px;
  position: relative;
  display: inline-block;
  background-color: var(--background-color);

&::before {
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--loader-color);
  background-image: radial-gradient(circle 8px at 18px 18px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--background-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--background-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}

&::after {
  content: '';
  left: 35px;
  top: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color:var(--loader-color);
  background-image: radial-gradient(circle 5px at 12px 12px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--background-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--background-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}  
`;

function Loader() {
    return (
        <LoaderWrapper>
            <LoaderAmimation />
        </LoaderWrapper>
    )
}

export default Loader
