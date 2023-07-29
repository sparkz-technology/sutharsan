/* eslint-disable react/prop-types */
import styled from "styled-components";
const Subtitle = styled.p`
  color: var(--Light-Slate);
  font-family: "Space Mono", monospace;
  font-size: 15px;
  font-weight: 100;
  line-height: 20px;
  @media (max-width: 768px) {
    text-align: left;
  }
`;
const StyledProjectSub = styled.div`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 20px;
  min-width: 300px;
  max-width: 600px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 0px;
    box-shadow: 3px 3px 10px 9px rgb(0 0 0 / 0.2);
  }
`;
function ProjectSub({ subtitle }) {
  return (
    <StyledProjectSub>
      <Subtitle>{subtitle}</Subtitle>
    </StyledProjectSub>
  );
}

export default ProjectSub;
