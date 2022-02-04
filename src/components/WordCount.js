import React from "react";

const WordCount = props => {
    const library = props.library

    const readPages = () => {
        let pages = 0
        for (let i=0; i<library.length; i++){
          if (library[i].finished) {
            pages += parseInt(library[i].pageCount)
          }
        }
        return pages
      }

    return (
        <div>
            You have read {readPages()} pages.
        </div>
    )
}

export default WordCount