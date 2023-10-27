import Sidebar from "../features/Admin/Sidebar"
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../features/Admin/Header";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  grid-template-rows: auto 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: 6.4rem 1fr; */
  }
`;

const Main = styled.main`
  background-color:var(--main-background-color);
  padding: 2.5rem 4.8rem 6.4rem;
  overflow: scroll; 
  height: 100vh;
  @media (max-width: 768px) {
    padding:2.5rem 0.5rem 6.4rem;// means 4rem top 2.4rem right 6.4rem bottom
  }

`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (<>
    <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    <StyledAppLayout>

      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  </>

  );
}

export default AppLayout;
