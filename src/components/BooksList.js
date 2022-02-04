import React from "react"
import BookItem from "./BookItem"

const BooksList = props => {
    const library = props.library

    return (
        <ul>
            {library.map((item) => 
                <BookItem 
                    key={item.id} 
                    book={item} 
                    handleChange={props.handleChange} 
                    handleDelete={props.handleDelete}
                    handleRating={props.handleRating}
                />
            )}
        </ul>
    )
}

export default BooksList