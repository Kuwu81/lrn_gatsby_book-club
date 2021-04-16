import * as React from "react"
import { Link, graphql } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


// markup
const IndexPage = (props) => {
  console.log(props);
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      {props.data.allBook.edges.map((edge) =>
          <div key={edge.node.id}>
            <h2>{edge.node.title} - <small>{edge.node.author.name}</small></h2>
            <div>{edge.node.summary}</div>
            <Link to={`/book/${edge.node.id}`}>Join conversation</Link>
          </div>
      )}
    </main>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          summary
          title
          id
          author {
            name
          }
        }
      }
    }
  }
`
export default IndexPage
