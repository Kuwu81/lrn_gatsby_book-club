import React, {useEffect} from "react";

export const BookComments = ({firebase, bookId}) => {
    useEffect(() => {
        const unsubscribe = firebase.subscribeToBookComments({bookId});

        return () => {
            if(unsubscribe) {
                unsubscribe();
            }
        }
    }, [])
    return (
        <div>
            test
        </div>
    )
}
