import { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';

export const useHistoryContext = () => {
	const context = useContext(HistoryContext);

	if (!context) {
		throw new Error(
			'useHistoryContext muse be used inside a HistoryContextProvider'
		);
	}

	return context;
};
