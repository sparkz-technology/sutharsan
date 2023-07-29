import styled from "styled-components";
const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center; // Vertical
  justify-content: center; // Horizontal
  background: linear-gradient(to top, #4c234a, #0f1532);
  backdrop-filter: blur(4px);
`;
function Loader() {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
}

export default Loader;
