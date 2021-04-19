import React from "react";
import Layout from "../compnents/Layout";
import BookItem from "../compnents/BookItem";

const BookTemplate = ({ pageContext }) => {
    return (
        <Layout>
            <BookItem>
                <h2>
                    {pageContext.title} -
                    <small>{pageContext.author.name}</small>
                </h2>
                <p>
                    {pageContext.summary}
                </p>
            </BookItem>
        </Layout>
    );
}

export default BookTemplate;
