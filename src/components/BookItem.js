import React from "react";
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BookItemWrapper = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 8px;
  margin-bottom: 15px;
  display: flex;
  
  h2 {
    small{
      font-size: 14px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
  
  p {
      color: #232129;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 0;
      line-height: 1.25;
      text-align: justify;
  }
`;

const BookItemImageWrapper = styled.div`
  max-width: 200px;
  img {
    max-width: 200px;
  }
`;

const BookItemContentWrapper = styled.div`
  padding: 32px;
  flex-grow: 1;
`

const BookItem = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
    const image = getImage(bookCover)
    return (
        <BookItemWrapper>
            <BookItemImageWrapper>
                <GatsbyImage image={image} alt="Book cover"/>
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>
                    {bookTitle}
                    <small>{authorName}</small>
                </h2>
                <p>{bookSummary}</p>
                <div>{children}</div>
            </BookItemContentWrapper>
        </BookItemWrapper>
    )
}

export default BookItem;
