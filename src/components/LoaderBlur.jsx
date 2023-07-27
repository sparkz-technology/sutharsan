import styled from "styled-components";

function LoaderBlur() {
  const StyledLoaderBlur = styled.div`
    display: flex;
    align-items: center; // Vertical
    justify-content: center; // Horizontal
  `;
  return (
    <StyledLoaderBlur>
      <div className="loader"></div>
    </StyledLoaderBlur>
  );
}

export default LoaderBlur;
