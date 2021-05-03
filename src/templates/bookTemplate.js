import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BookItem from "../components/BookItem";

const BookTemplate = ({ data }) => {
    console.log(data)
    const { book } = data;
    return (
        <Layout>
            <BookItem
                authorName={book.author.name}
                bookCover={book.localImage}
                bookTitle={book.title}
                bookSummary={book.summary}
            />
        </Layout>
    );
}

export const query = graphql`
    query BookQuery($bookId: String!) {
        book (id: {eq: $bookId}) {
          title
          id
          summary
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
`

export default BookTemplate;
