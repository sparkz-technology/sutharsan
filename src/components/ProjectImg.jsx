/* eslint-disable react/prop-types */
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; //
const StyledProjectImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledImg = styled(LazyLoadImage)`
  border-radius: 10px;
  min-width: 449px;
  min-height: 362px;
  max-width: 70%;
  max-height: 70%;
  margin: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;
function ProjectImg({ img }) {
  return (
    <StyledProjectImg>
      <StyledImg
        src={img}
        alt="projectimg"
        effect="blur" // Optional blur effect during loading
        threshold={100} // Optional, default is 100. Controls how early the image starts to load before it's visible.
      ></StyledImg>
    </StyledProjectImg>
  );
}

export default ProjectImg;
