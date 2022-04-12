import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import { BookDetails } from "./BookDetails";
import "./bookList.css";

export const BookList = () => {
	const { loading, data } = useQuery(getBooksQuery);
	const [selected, setSelected] = useState(null);
	console.log(selected);
	const displayBooks = () => {
		if (loading) {
			return <li>Loading Books...</li>;
		} else {
			return data.books.map((book) => (
				<li key={book.id} onClick={() => setSelected(book.id)}>
					{book.name}
				</li>
			));
		}
	};

	return (
		<div>
			<ul id='book-list'>{displayBooks()}</ul>
			{selected && <BookDetails bookId={selected} />}
		</div>
	);
};
