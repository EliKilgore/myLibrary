import React, {useState} from "react";
import StarRating from "./StarRating";
import {FiTrash, FiChevronsDown, FiChevronsUp} from 'react-icons/fi'
const BookItem = (props) => {

    const {title, author, id, finished, pageCount, comments } = props.book
    const [isHidden, setHidden] = useState (true)
    
    const toggleInfo = (e) => {
        setHidden(!isHidden)
    }
    let viewMode = {}
    let infoMode = {}

    if (isHidden) {
        infoMode.display='none'
    } else {
        viewMode.display='none'
    }


    return (

        <li className="item">
            <div>
                <input
                    type="checkbox"
                    checked={finished}
                    onChange={() => props.handleChange(id)}
                    className="checkbox"
                />
                <button className="showInfo" style={viewMode} onClick={toggleInfo}><FiChevronsDown size={24}/></button>
                <button className="hideInfo" style={infoMode} onClick={toggleInfo}><FiChevronsUp size={24} /></button>
                <StarRating id={id} handleRating={props.handleRating}/>
                <span className="title">{title}</span>
                <span className="author">{author}</span>
            </div>
            <div className="info" style={infoMode}>
                
                <textarea placeholder="Leave a comment..." onChange={(e) => props.handleComment(id, e.target.value)} value={comments}></textarea>
                <button className="delete" onClick={() => props.handleDelete(id)}><FiTrash size={18}/></button>
                <div className="pageCount">{pageCount} pages</div>
            </div>
            
        </li>
    )
}

export default BookItem
