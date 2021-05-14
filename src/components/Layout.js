import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { FirebaseContext, useAuth } from './Firebase';

const MainWrapper = styled.main`
  color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

const Layout = ({ children}) => {
    const { user, firebase, loading } = useAuth();
    return (
        <FirebaseContext.Provider value={{ user, firebase, loading }}>
            <Header />
            <MainWrapper>{children}</MainWrapper>
        </FirebaseContext.Provider>
    );
}

export default Layout;



