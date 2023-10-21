import { Outlet } from "react-router-dom"
import Sidebar from "../features/Admin/Sidebar"
import styled from "styled-components"

const OutletContainer = styled(Outlet)`
    background-color: #cae998; 
    `;

const Container = styled.div`
/* display: grid;  */

/* grid-template-rows: 4rem auto 45px; */
/* grid-template-columns: 6fr 1fr; */

gap: 3px;
height: 100%;
`;

function AdminLayout() {
    return (
        <Container>
            <Sidebar />
            <OutletContainer />
        </Container>
    )
}

export default AdminLayout
