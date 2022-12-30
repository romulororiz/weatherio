import React from 'react';
import Search from './Search';
import WeatherDetails from './WeatherDetails';
import '../styles/scss/DashboardDetails.scss';

const DashboardDetails = ({
	setCity,
	city,
	current,
	setIsHome,
	isHome,
	setCityLoading,
}) => {
	return (
		<div className='dashboard-details'>
			<div className='container'>
				<Search
					setCity={setCity}
					setIsHome={setIsHome}
					setCityLoading={setCityLoading}
				/>
				<hr />
				<WeatherDetails city={city} current={current} isHome={isHome} />
			</div>
		</div>
	);
};

export default DashboardDetails;
