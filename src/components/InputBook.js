import React, { useState } from 'react'

const InputBook = (props) => {
    const [inputBook, setInputBook] = useState({
        title: "",
        author: "",
        pageCount: ""
    })

    const onChange = e => {
        setInputBook({
            ...inputBook,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputBook.title.trim()) {
            props.addBook(inputBook.title, inputBook.author, inputBook.pageCount)
            setInputBook ({
                title: "",
                author: "",
                pageCount: ""
            })
        } else {
            alert ("Please add a title")
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder="book title..."
                value={inputBook.title}
                onChange={onChange}
                />
            <input 
                type="text"
                name="author"
                placeholder="author..."
                value={inputBook.author}
                onChange={onChange}
                />
            <input 
                type="number"
                name="pageCount" 
                placeholder="page count..."
                value={inputBook.pageCount}
                onChange={onChange}
                />
            <button type="submit">
                Add Book!
            </button>
        </form>
    )
}

export default InputBook