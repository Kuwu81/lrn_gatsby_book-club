import React, {useContext} from "react";
import { graphql } from "gatsby";
import BookItem from "../components/BookItem";
import { BookComments } from "../components/common";
import {FirebaseContext} from "../components/Firebase";

const BookTemplate = ({ data }) => {
    const { book } = data;
    const { firebase } = useContext(FirebaseContext )
    return (
        <section>
            <BookItem
                authorName={book.author.name}
                bookCover={book.localImage}
                bookTitle={book.title}
                bookSummary={book.summary}
            />
            {!!firebase && <BookComments firebase={firebase} bookId={book.id}/>}
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
