import React from "react";
import { getBookQuery } from "../queries/queries";
import { useQuery } from "@apollo/client";
import "./bookDetails.css";

export const BookDetails = ({ bookId }) => {
	const { loading, data } = useQuery(getBookQuery, {
		variables: { id: bookId },
	});

	const getDetails = () => {
		if (loading) {
			return <p>Loading...</p>;
		} else {
			const { book } = data;
			return (
				<div>
					<h2>{book.name}</h2>
					<p>{book.genre}</p>
					<p>{book.author.name}</p>
					<p>All books by author:</p>
					<ul>
						{book.author.books.map((item) => (
							<li key={item.id}>{item.name}</li>
						))}
					</ul>
				</div>
			);
		}
	};

	return <div id='book-details'>{getDetails()}</div>;
};
