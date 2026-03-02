import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BooksContext } from '../BooksContext';

export default function Books() {
    const  query = new URLSearchParams(useLocation().search);
    const search = query.get("search") || "";
    const { books } = useContext(BooksContext);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        console.log(query);
        console.log(search);
    });

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                        <h2>{book.title} by {book.author}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}