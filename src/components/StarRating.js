import React, { useState } from "react";
import { FiStar } from 'react-icons/fi'

const StarRating = (props) => {
    const [rating, setRating] = useState(0)

    const onRatingChange = (index) => {
        setRating(index)
        props.handleRating(props.id, rating+1)
    }

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index)=> {
                index += 1
                return (
                    <button
                        type="button"
                        key={index}
                        className={index  <=  rating ? "on" : "off"}
                        onClick={()=>onRatingChange(index)}
                    >
                    <span className="star"><FiStar size={18}/></span>
                    </button>
                )
            })}
        </div>
    )
}

export default StarRating