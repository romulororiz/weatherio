import { createContext, useEffect, useReducer } from 'react';
import { historyReducer } from './HistoryReducer';

export const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
	const history = JSON.parse(localStorage.getItem('weather_search_history'));

	const initialState = {
		searchHistory: history ? history : [],
	};

	const [state, dispatch] = useReducer(historyReducer, initialState);

	useEffect(() => {
		localStorage.setItem(
			'weather_search_history',
			JSON.stringify(state.searchHistory)
		);
	}, [state]);

	return (
		<HistoryContext.Provider value={{ ...state, dispatch }}>
			{children}
		</HistoryContext.Provider>
	);
};
