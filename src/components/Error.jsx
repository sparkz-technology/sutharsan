import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  const Header = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <>
      <Header>
        <h1>Something went wrong 😢</h1>
        <p>{error.data || error.message}</p>
        <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
      </Header>
    </>
  );
}

export default Error;
