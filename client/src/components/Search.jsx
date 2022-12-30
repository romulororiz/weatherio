import { useLazyQuery } from '@apollo/client';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { GET_CITY_WEATHER } from '../graphql/queries';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { useHistoryContext } from '../hooks/useHistoryContext';
// import { countries } from 'country-flag-icons';
import '../styles/scss/Search.scss';

const Search = ({ setCity, setIsHome, setCityLoading }) => {
	const [term, setTerm] = useState('');
	const [queryError, setQueryError] = useState(false);
	// const [country, setCountry] = useState(null);
	const { dispatch, searchHistory } = useHistoryContext();
	const [getCity, { loading, error, data }] = useLazyQuery(GET_CITY_WEATHER, {
		variables: {
			name: term,
			countryCode: '', //todo implement country code onSubmit
			cnt: 40,
		},
	});

	//todo add country selector function for country code

	const inputField = useRef();
	// const selectCountry = useRef();

	useEffect(() => {
		if (queryError) {
			alert('Could not find specified city');
		}

		setCityLoading(loading);
	}, [loading, queryError, setCityLoading]);

	useEffect(() => {
		if (error) {
			setQueryError(true);
			setTimeout(() => {
				setQueryError(false);
			}, 500);
		}

		if (data !== undefined && !loading) {
			setCity(data);
		}
	}, [data, error, loading, setCity]);

	const onSubmit = e => {
		e.preventDefault();

		setIsHome(false);

		if (inputField.current.value === '') {
			return;
		}

		setTerm(inputField.current.value.trim());
		getCity();
		dispatch({
			type: 'ADD_SEARCH',
			payload: inputField.current.value,
		});

		inputField.current.value = '';
		// selectCountry.current.selectedIndex = -1;
	};

	const historyHandler = city => {
		getCity();
		setTerm(city);
		inputField.current.value = city;
		setIsHome(false);
	};

	return (
		<div className='search'>
			<div className='form-dropdown'>
				<form onSubmit={onSubmit}>
					<div className='wrapper'>
						<input type='text' ref={inputField} placeholder='Search location' />
						<RxMagnifyingGlass className='icon' />
					</div>
				</form>
				{/* <select
					ref={selectCountry}
					className='country-dpdwn'
					defaultValue='default'
					onChange={e => setCountry(e.target.value)}
				>
					<option value='default' disabled>
						Country
					</option>
					{countries.map((country, idx) => (
						<option key={idx}>{country}</option>
					))}
				</select> */}
			</div>
			<div className='search-history'>
				{searchHistory.length ? (
					searchHistory.map((city, idx) => (
						<div key={idx} className='history-item'>
							<p onClick={() => historyHandler(city)}>{city}</p>
							<MdClose
								className='icon'
								size={14}
								onClick={() =>
									dispatch({
										type: 'DELETE_SEARCH',
										payload: idx,
									})
								}
							/>
						</div>
					))
				) : (
					<p className='no-history'>You have no search history</p>
				)}
			</div>
		</div>
	);
};
export default Search;
