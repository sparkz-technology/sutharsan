/* eslint-disable react/prop-types */
import styled from "styled-components";

const CircularProgressBarWrapper = styled.div`
  position: relative;
  ${({ size }) => `width: ${size}px; height: ${size}px;`}
  transition: all 0.3s ease-in-out;
`;

const CircularProgressBarSVG = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  transition:
    all 0.3s ease-in-out,
    transform 0.5s;
  animation: progress 1s ease-in-out forwards;

  @keyframes progress {
    from {
      stroke-dashoffset: 440;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const CircularProgressBarCircle = styled.circle`
  fill: transparent;
  ${({ color }) => `stroke: ${color};`}
  stroke-width: 8;
`;

const CircularProgressBarPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const CircularProgressBar = ({
  percentage,
  color = "#FF5733",
  radius = 40,
}) => {
  const size = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <CircularProgressBarWrapper size={size}>
      <CircularProgressBarSVG>
        <CircularProgressBarCircle
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          color={color}
        />
      </CircularProgressBarSVG>
      <CircularProgressBarPercentage>
        {percentage}%
      </CircularProgressBarPercentage>
    </CircularProgressBarWrapper>
  );
};

export default CircularProgressBar;
