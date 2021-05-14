import React from "react";
import { graphql } from "gatsby";
import BookItem from "../components/BookItem";

const BookTemplate = ({ data }) => {
    console.log(data)
    const { book } = data;
    return (
        <section>
            <BookItem
                authorName={book.author.name}
                bookCover={book.localImage}
                bookTitle={book.title}
                bookSummary={book.summary}
            />
        </section>
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
