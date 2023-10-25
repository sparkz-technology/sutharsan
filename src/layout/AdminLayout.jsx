// import { Outlet } from "react-router-dom"
import Sidebar from "../features/Admin/Sidebar"
// import styled from "styled-components"
// import { useState } from "react";
// import Header from "../features/Admin/Header";

// const OutletContainer = styled(Outlet)`
//     background-color: #cae998; 
//     width: 80%;
//     height: 100vh;
//     margin-left: 20%;
//     padding: 20px;
//     overflow-x: auto;
//     overflow-y: hidden;
//     white-space: nowrap;
//     @media (max-width: 768px) {
//         width: 100%;
//         margin-left: 0;
//     }
//     `;

// const Container = styled.div`
// display: flex;
// justify-content: space-between;
// height: 100%;
// `;

// function AdminLayout() {
//     const [openSidebar, setOpenSidebar] = useState(false);

//     return (
//         <>
//             <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
//             <Container>
//                 <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
//                 <OutletContainer />
//             </Container>
//         </>

//     )
// }

// export default AdminLayout.
import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
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
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll; 
  @media (max-width: 768px) {
    padding: 4rem 2.4rem 6.4rem;
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
