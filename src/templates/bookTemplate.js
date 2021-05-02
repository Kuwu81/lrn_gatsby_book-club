import React from "react";
import Layout from "../components/Layout";
import BookItem from "../components/BookItem";

const BookTemplate = ({ pageContext }) => {
    return (
        <Layout>
            <BookItem
                authorName={pageContext.author.name}
                bookTitle={pageContext.title}
                bookSummary={pageContext.summary}
            />
        </Layout>
    );
}

export default BookTemplate;
