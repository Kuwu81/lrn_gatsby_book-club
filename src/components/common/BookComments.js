import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Input} from "./Input";
import {Button} from "./Button";

const CommentListItem = styled.div` 
  >strong {
    font-size: 80%;
    color: #666;
  }
   border-bottom: 1px solid #ddd;
  padding: 4px 0;
`

const StyledCommentForm = styled.form`
  display: flex;
  margin: 32px 0;
  
  ${Input} {
    margin-right: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  ${Button} {
    margin: auto 0;
  }
`;


export const BookComments = ({firebase, bookId}) => {
    const [comments, setComments] = useState([]);
    console.log(comments);
    useEffect(() => {
        const unsubscribe = firebase.subscribeToBookComments(
            {
                bookId,
                onSnapshot: (snapshot) => {
                    console.log(snapshot);
                    const snapshotComments = [];
                    snapshot.forEach((doc) => {
                        snapshotComments.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })

                    setComments(snapshotComments);
                }
            });

        return () => {
            if(unsubscribe) {
                unsubscribe();
            }
        }
    }, [])
    return (
        <div>
        <StyledCommentForm>
            <Input />
            <Button>Post comment</Button>
        </StyledCommentForm>
            {comments.map((tmpComment) =>
                <CommentListItem key={tmpComment.id}>
                    <strong>{tmpComment.username}</strong>
                    <div>{tmpComment.text}</div>
                    </CommentListItem>)}
        </div>
    )
}
