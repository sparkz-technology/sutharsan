/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import styled from "styled-components"

const StyledTable = styled.div`
    border: 1px solid var(--border-color);
    font-size: 1.4rem;
    border-radius: 7px;
    overflow: hidden;
`;

const StyledHeader = styled.div`
    padding: 1.6rem 2.4rem;
    border: 1px solid var(--border-color);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 400;
    color:var(--sub-text-color);
    border: 1px solid var(--border-color);
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-gap: 1.6rem;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
    
    `;

const StyledRow = styled.div`
    padding: 0.5rem 2.4rem;
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    background-color: var(--container-background-color);
    grid-gap: 1.6rem;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color:var(--sub-text-color);
    &:not(:last-child) {
        border: 1px solid var(--border-color);
    }
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem 2.6rem ;
    }
  
`;
const StyledBody = styled.section`
  margin: 0.4rem 0;
`;
const Empty = styled.p`
font-size: 1.6rem;
font-weight: 500;
text-align: center;
margin: 2.4rem;
`;


const TableContext = createContext();
function Table({ columns, children }) {
    return (
        <TableContext.Provider value={{ columns }}>
            <StyledTable role="table">{children}</StyledTable>
        </TableContext.Provider>
    )
}

function Header({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledHeader role="row" as="header" columns={columns}>
            {children}
        </StyledHeader>
    )
}

function Row({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledRow role="row" columns={columns}>
            {children}
        </StyledRow>
    )
}
function Body({ data, render }) {
    if (!data.length) return <Empty>No data to show at the moment</Empty>;

    return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table
