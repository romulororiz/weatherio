import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HistoryContextProvider } from './context/HistoryContext';
import './styles/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HistoryContextProvider>
			<App />
		</HistoryContextProvider>
	</React.StrictMode>
);
