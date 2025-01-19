import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    height: 60px;
    line-height: 60px;
    overflow: none;
    width: 100%;
    padding: 0 1rem;
`;

export const Navbar = (props) => {
    return (
        <>
            <Nav>{props.children}</Nav>
        </>
    );
};
