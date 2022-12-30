import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import { GET_CURRENT_WEATHER } from '../graphql/queries';
import useGeolocation from '../hooks/useGeolocation';
import { dateTime } from '../utils/DateTimeConverter';
import { dynamicBg } from '../utils/DynamicBg';
import DashboardDetails from './DashboardDetails';
import TempConverter from './TempConverter';
import Icon from './Icon';
import { MdHouse } from 'react-icons/md';
import { useHistoryContext } from '../hooks/useHistoryContext';
import '../styles/scss/Dashboard.scss';
import Footer from './Footer';

const Dashboard = () => {
	const [city, setCity] = useState(null);
	const [weatherId, setWeatherId] = useState(null);
	const [isHome, setIsHome] = useState(false);
	const [cityLoading, setCityLoading] = useState(true);

	const { lat, lon, geoError } = useGeolocation();

	const { data, loading } = useQuery(GET_CURRENT_WEATHER, {
		variables: {
			lat: lat,
			lon: lon,
		},
	});

	const { dispatch, searchHistory } = useHistoryContext();

	useEffect(() => {
		if (city || data) {
			if (isHome) {
				setWeatherId(data.CurrentWeather.weather[0].id);
			} else {
				setWeatherId(
					city
						? city.CityWeather.list[0].weather[0].id
						: data.CurrentWeather.weather[0].id
				);
			}
		}
	}, [city, data, isHome]);

	const historyHandler = () => {
		setIsHome(true);

		if (searchHistory.includes(data.CurrentWeather.name)) {
			return;
		}

		dispatch({
			type: 'ADD_SEARCH',
			payload: data.CurrentWeather.name,
		});
	};

	return (
		<div className={`dashboard-wrapper ${dynamicBg(weatherId)}`}>
			{data && !loading && (
				<div className={`dashboard-main ${dynamicBg(weatherId)}`}>
					<div className='left-side'>
						{cityLoading ? (
							<p className='locating'>Locating...</p>
						) : (
							<div className='temp-wrapper'>
								<TempConverter
									city={city}
									currentWeather={data}
									isHome={isHome}
								/>
								<div className='location'>
									{isHome ? (
										<p>{`${data.CurrentWeather.name}, ${data.CurrentWeather.sys.country}`}</p>
									) : (
										<p>
											{city
												? `${city.CityWeather.city.name}, ${city.CityWeather.city.country}`
												: `${data.CurrentWeather.name}, ${data.CurrentWeather.sys.country}`}
										</p>
									)}
									{isHome ? (
										<span>
											{dateTime(
												data.CurrentWeather.dt,
												null,
												'HH:mm a - dddd, MMM DD. YYYY'
											)}
										</span>
									) : (
										<span>
											{city
												? dateTime(
														city.CityWeather.list[0].dt,
														null,
														'dddd, MMM DD. YYYY'
												  )
												: dateTime(
														data.CurrentWeather.dt,
														null,
														'HH:mm a - dddd, MMM DD. YYYY'
												  )}
										</span>
									)}
								</div>
								<div className='icon-wrapper'>
									<Icon id={weatherId} color='#fff' size={80} />
									{isHome ? (
										<span>{data.CurrentWeather.weather[0].description}</span>
									) : (
										<span>
											{city
												? city.CityWeather.list[0].weather[0].description
												: data.CurrentWeather.weather[0].description}
										</span>
									)}
								</div>
							</div>
						)}
						<MdHouse className='icon' onClick={historyHandler} />
					</div>
					<DashboardDetails
						setCity={setCity}
						city={city}
						current={data}
						setIsHome={setIsHome}
						isHome={isHome}
						setCityLoading={setCityLoading}
					/>
				</div>
			)}
			{geoError && (
				<div className='error'>
					<h2>{geoError}</h2>
				</div>
			)}
			<Footer />
		</div>
	);
};
export default Dashboard;
