import React from "react";
import "./Book.styles.css";

type Props = {
  book: {
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: [];
      imageLinks: {
        smallThumbnail: string;
      };
    };
  };
};

const Book: React.FC<Props> = ({ book }) => {
  console.log("book", book);
  const {
    volumeInfo: {
      title,
      subtitle,
      authors,
      imageLinks: { smallThumbnail },
    },
  } = book;

  return (
    <div className="container">
      <div className="bookCard">
        <img alt="book" src={smallThumbnail} />
        <p id="bookTitle">{title}</p>
        <p id="authors">{authors}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
export default Book;
