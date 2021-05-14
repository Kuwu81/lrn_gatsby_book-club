import * as React from "react"
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import BookItem from "../components/BookItem";
import '../styles/index.css';

const LinkButton = styled.div`
  text-align: right;
  margin-bottom: 8px;

  a {
    padding: 8px;
    background-color: rebeccapurple;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    
    &:hover {
      background: indigo;
    }
  }
  
`;

const IndexPage = (props) => {
  console.log(props);
  return (
      <section>
            <title>Home Page</title>
            {props.data.allBook.edges.map((edge) =>
                <BookItem
                    authorName={edge.node.author.name}
                    bookCover={edge.node.localImage}
                    bookSummary={edge.node.summary}
                    bookTitle={edge.node.title}
                    key={edge.node.id}
                >
                <LinkButton>
                     <Link to={`/book/${edge.node.id}`}>Join conversation</Link>
                </LinkButton>
                </BookItem>
            )}
      </section>
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
          localImage {
            childImageSharp {
                gatsbyImageData(
                    layout: FIXED
                    width: 200
                    placeholder: DOMINANT_COLOR
                )
            }
          }
        }
      }
    }
  }
`
export default IndexPage;
