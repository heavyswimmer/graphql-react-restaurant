import './App.css';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Restaurants from './components/restaurants';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<header class="App-header">
					<h1>Your Friend Restaurants List</h1>
				</header>
				<main>
					<Restaurants />
				</main>
			</ApolloProvider>
		</div>
	);
}

export default App;
