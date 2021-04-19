import React from "react";
import {graphql, useStaticQuery} from "gatsby";

const Layout = ({ children}) => {
    const data = useStaticQuery(graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    return (<div>
        <h1 style={{ height: '40px', width: '100%', marginBottom: '20px', padding: '20px', backgroundColor: 'lavender'}}>
           {data.site.siteMetadata.title}
        </h1>
        <main>{children}</main>
    </div>);
}

export default Layout;



