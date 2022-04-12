import { BookList } from "./components/BookList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AddBook } from "./components/AddBook";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id='main' style={{ width: "100%" }}>
				<div
					style={{ display: "flex", width: "60%", justifyContent: "center" }}
				>
					<h1>Reading List With GraphQL</h1>
				</div>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
}

export default App;
