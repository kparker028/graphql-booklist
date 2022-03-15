import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>New Reading List</h1>
				<BookList />
			</div>
		</ApolloProvider>
	);
}

export default App;
