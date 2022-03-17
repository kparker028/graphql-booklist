import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

export const BookList = () => {
	const { loading, error, data } = useQuery(getBooksQuery);
	// console.log(data);
	// console.log(loading);

	const displayBooks = () => {
		if (loading) {
			return <li>Loading Books...</li>;
		} else {
			return data.books.map((book) => <li key={book.id}>{book.name}</li>);
		}
	};

	return (
		<div>
			<ul id='book-list'>{displayBooks()}</ul>
		</div>
	);
};
