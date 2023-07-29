/* eslint-disable react/prop-types */
import styled from "styled-components";
const StyledProjectTitle = styled.div`
  min-width: 340px;
  padding-right: 20px;
  font-family: "Roboto Mono", monospace;
  @media (max-width: 900px) {
    min-width: 0px;
    padding-right: 0px;
    padding-left: 20px;
  }
`;
const Title = styled.p`
  font-size: 15px;
  text-align: right;
  color: var(--color-Green);
  @media (max-width: 900px) {
    text-align: left;
  }
`;
const Span = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  text-align: right;
  color: var(--color-Light-Slate);
  @media (max-width: 900px) {
    text-align: left;
  }
`;
function ProjectTitle({ name }) {
  return (
    <StyledProjectTitle>
      <Title>
        Mini Project
        <br />
        <Span>{name}</Span>
      </Title>
    </StyledProjectTitle>
  );
}

export default ProjectTitle;
