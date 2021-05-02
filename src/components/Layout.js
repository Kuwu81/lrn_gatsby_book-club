import React from "react";
import styled from "styled-components";
import Header from "./Header";

const MainWrapper = styled.main`
  color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

const Layout = ({ children}) => {
    return (
        <div>
            <Header />
            <MainWrapper>{children}</MainWrapper>
        </div>
    );
}

export default Layout;



