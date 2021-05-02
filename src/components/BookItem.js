import React from "react";
import styled from 'styled-components';

const BookItemWrapper = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 8px;
  margin-bottom: 15px;
  
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

const BookItem = ({ authorName, bookTitle, bookSummary, children }) => {
    return (
        <BookItemWrapper>
            <h2>
                {bookTitle}
                <small>{authorName}</small>
            </h2>
            <p>{bookSummary}</p>
            <div>{children}</div>
        </BookItemWrapper>
    )
}

export default BookItem;
