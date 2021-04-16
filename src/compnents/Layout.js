import {graphql} from "gatsby";

const Layout = (props) => {
    return <div>
        {}
    </div>
}

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

