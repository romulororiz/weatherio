import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';
import Dashboard from './components/Dashboard';
import NotFound from './pages/NotFound';

function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<Routes>
					<Route path='/' exact element={<Dashboard />} />
					<Route path='*' exact element={<NotFound />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
