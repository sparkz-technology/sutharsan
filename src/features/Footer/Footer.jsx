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
  span{
    color:var(--title-color);
// change the color of the text here like gradient in anmation
    background: linear-gradient(to right, #ff105f, #ffad06);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 2s linear infinite;
    @keyframes animate {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
    
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function Footer() {
  return (
    <Container>
      <p>Designed and built by <span>Sutharsan G</span></p>
    </Container>
  );
}

export default Footer;
