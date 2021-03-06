import React, {useState} from 'react'
import uniqid from 'uniqid'
import Header from './components/Header'
import InputBook from './components/InputBook';
import BooksList from './components/BooksList';
import WordCount from './components/WordCount'

function App() {

  const [library, setLibrary ] = useState([])

  const addBook = (title, author, pageCount) => {
    const newBook = {
      id: uniqid(),
      title: title,
      author: author,
      pageCount: pageCount,
      finished: false,
      rating: 0,
      comments: ''
    };
    setLibrary([...library, newBook])
    console.log(newBook)
  }

  const handleChange = (id) => {
    setLibrary(prevState => prevState.map((item) => {
      if (item.id === id) {
        return {
          ...item, finished: !item.finished
        }
      }
      return item
    }))
  }

  const handleDelete = (id) => {
    setLibrary([
      ...library.filter(item => {
        return item.id !== id
      })
    ])
  }
  
  const handleRating = (id, rating) => {
    setLibrary(prevState => prevState.map((item) => {
      if (item.id === id) {
        return {
          ...item, rating: rating
        }
      }
      return item
    }))
  }

  const handleComment = (id, newComment) => {
    setLibrary(prevState => prevState.map((item) => {
      if (item.id === id) {
        return {
          ...item, comment: newComment
        }
      }
      return item
    }))
  }

  return (
    <div>
      <Header />
      <InputBook addBook={addBook}/>
      <BooksList library={library} handleChange={handleChange} handleDelete={handleDelete} handleRating={handleRating} handleComment={handleComment}/>
      <WordCount library={library}/>
    </div>
  );
}

export default App;
