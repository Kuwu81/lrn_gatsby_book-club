import * as React from "react"
import { Link, graphql } from "gatsby";
import BookItem from "../compnents/BookItem";
import Layout from "../compnents/Layout";
import '../styles/index.css';

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
  float: "right"
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
  textAlign: "justify"
}


const IndexPage = (props) => {
  console.log(props);
  return (
      <Layout>
          <main style={pageStyles}>
            <title>Home Page</title>
            {props.data.allBook.edges.map((edge) =>
                <BookItem key={edge.node.id}>
                  <h2>{edge.node.title} - <small>{edge.node.author.name}</small></h2>
                  <div style={descriptionStyle}>{edge.node.summary}</div>
                  <Link style={docLinkStyle} to={`/book/${edge.node.id}`}>Join conversation</Link>
                </BookItem>
            )}
          </main>
      </Layout>
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
export default IndexPage;
