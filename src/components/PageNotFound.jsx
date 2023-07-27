import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FourOFour = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #fff;
  font-family: "Martian Mono";
`;
const PageNotFoundP = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
const PageNotFoundLink = styled(Link)`
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ffff00;
  text-align: center;
`;
function PageNotFound() {
  return (
    <Header>
      <FourOFour>404</FourOFour>
      <PageNotFoundP>Page Not Found</PageNotFoundP>
      <PageNotFoundLink to="/">Go Back</PageNotFoundLink>
    </Header>
  );
}

export default PageNotFound;
