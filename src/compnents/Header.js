import React from "react";
import {graphql, useStaticQuery} from "gatsby";

const headerStyle = {
    top: '0',
    height: '40px',
    width: '100%',
    marginBottom: '20px',
    padding: '20px',
    paddingLeft: 96,
    backgroundColor: 'lavender',
    display: 'flex',
    alignItems: 'center',
}

const Header = () => {
    const data = useStaticQuery(graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    return (<div style={headerStyle}>
        <div className="container">
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
    </div>);
}

export default Header;
