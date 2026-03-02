import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
    const { bookId } = useParams();
    const { books } = useContext(BooksContext);

    // Show loading while fetching
    if (!books.length) {
        return <div>Loading...</div>;
    }

    const book = books.find((b) => b.id === Number(bookId));

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>
        </div>
    );
}