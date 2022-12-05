import { GlobalStyle } from './styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';

function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<GlobalStyle />
			<Router>
				<Routes>
					{/* <Route path='/' exact element={<Home />} /> */}
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
