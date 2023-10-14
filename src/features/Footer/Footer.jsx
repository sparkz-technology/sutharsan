import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* background-color: #f5f5f5; */
  color: var(--text-color);
  font-size: 1rem;
  font-family:
    Roboto Mono,
    monospace;
  font-weight: 500;
  text-align: center;
  flex-direction: column;
  gap: 1rem;
  p {
    margin: 0;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function Footer() {
  return (
    <Container>
      <p>Designed and built by Sutharsan</p>
    </Container>
  );
}

export default Footer;
