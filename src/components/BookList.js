import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const BookList = ({ data: { books } }) => {
	console.log(getBooksQuery);
	return (
		<div>
			<ul id='book-list'>
				<li>Book name here</li>
			</ul>
		</div>
	);
};

export default graphql(gql`
	query getBooksQuery {
		books {
			name
			id
		}
	}
`)(BookList);
