import React, { useContext } from "react";
import {graphql, useStaticQuery, navigate, Link} from "gatsby";
import { FirebaseContext } from './Firebase';
import styled from "styled-components";

const HeaderWrapper = styled.header`
  top: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.45rem;
  padding: 1.45rem 7rem;
  color: white;
  background-color: rebeccapurple;
  
  >h1 {
    flex-grow: 1;
    
    a{
      text-decoration: none;
      color: white;
    }
  }
  
  >div {
    margin: auto 0;
  }
`;

const UserInfo = styled.div`
  text-align: right;
`;

const LogoutLink = styled.span`
  margin: auto 0;
  cursor: pointer;
  text-decoration: none;
  color: white;
  
  &:hover{
  text-decoration: underline
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover{
    text-decoration: underline
  }
`

const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background: #ddd;
`;


const Header = () => {
    const { user, firebase } = useContext(FirebaseContext);
    function handleLogoutClick() {
        firebase.logout().then(() => navigate('/login'))
    }
    const data = useStaticQuery(graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    return (
        <HeaderWrapper>
            <h1>
                <Link to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
            <div>
                { !!user && !!user.email &&
                    <UserInfo>
                        Hi dear {user.username || user.email}
                        <div>
                            <LogoutLink onClick={handleLogoutClick}>
                                Logout
                            </LogoutLink>
                        </div>
                    </UserInfo>
                }
                {
                    (!user || !user.email) &&
                    <div>
                        <StyledLink to='/login'>
                            Login
                        </StyledLink>
                        <Divider />
                        <StyledLink to='/register'>
                            Register
                        </StyledLink>
                    </div>
                }
            </div>
        </HeaderWrapper>
    );
}

export default Header;
