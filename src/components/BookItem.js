import React from "react";
import { FaTrash } from "react-icons/fa" 
import StarRating from "./StarRating";

const BookItem = (props) => {

    const {title, author, id, finished, pageCount } = props.book

    return (

        <li className="item">
            <div>
                <input
                    type="checkbox"
                    checked={finished}
                    onChange={() => props.handleChange(id)}
                    className="checkbox"
                />
                <StarRating id={id} handleRating={props.handleRating}/>
                <span>{title}, {author}</span>
            </div>
            <div>
                <button className="delete" onClick={() => props.handleDelete(id)}><FaTrash /></button>
                <div className="pageCount">{pageCount} pages</div>
            </div>
            
        </li>
    )
}

export default BookItem
