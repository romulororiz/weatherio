import '../styles/scss/WeatherDetails.scss';
import { visibilityConverter } from '../utils/Converter';
import { dateTime } from '../utils/DateTimeConverter';
import { ReactComponent as Sunrise } from '../assets/icons/wi-sunrise.svg';
import { ReactComponent as Sunset } from '../assets/icons/wi-sunset.svg';

const WeatherDetails = ({ city, current, isHome }) => {
	return (
		<div className='weather-details'>
			<h3>Weather Details</h3>
			<div className='weather-info'>
				<div className='weather-info-item'>
					<span>Cloudy</span>
					{isHome ? (
						<span>{current.CurrentWeather.clouds.all}%</span>
					) : (
						<span>
							{city
								? city.CityWeather.list[0].clouds.all
								: current.CurrentWeather.clouds.all}
							%
						</span>
					)}
				</div>
				<div className='weather-info-item'>
					<span>Wind Speed</span>
					{isHome ? (
						<span>{current.CurrentWeather.wind.speed.toFixed(1)} Km/h</span>
					) : (
						<span>
							{city
								? city.CityWeather.list[0].wind.speed.toFixed(1)
								: current.CurrentWeather.wind.speed.toFixed(1)}{' '}
							Km/h
						</span>
					)}
				</div>
				<div className='weather-info-item'>
					<span>Humidity</span>
					{isHome ? (
						<span>{current.CurrentWeather.main.humidity}%</span>
					) : (
						<span>
							{city
								? city.CityWeather.list[0].main.humidity
								: current.CurrentWeather.main.humidity}
							%
						</span>
					)}
				</div>
				<div className='weather-info-item'>
					<span>Visibility</span>
					{isHome ? (
						<span>
							{visibilityConverter(current.CurrentWeather.visibility)}
						</span>
					) : (
						<span>
							{visibilityConverter(
								city
									? city.CityWeather.list[0].visibility
									: current.CurrentWeather.visibility
							)}
						</span>
					)}
				</div>
				<hr />
				<div className='sunrise-sunset'>
					<h3>Sunrise & Sunset</h3>
					<div className='sunrise-sunset-wrapper'>
						<div className='wrapper'>
							<Sunrise className='icon' />
							{isHome ? (
								<div className='time'>
									{dateTime(
										current.CurrentWeather.sys.sunrise,
										current.CurrentWeather.timezone,
										'HH:mm A'
									)}
								</div>
							) : (
								<div className='time'>
									{city
										? dateTime(
												city.CityWeather.city.sunrise,
												city.CityWeather.city.timezone,
												'HH:mm A'
										  )
										: dateTime(
												current.CurrentWeather.sys.sunrise,
												current.CurrentWeather.timezone,
												'HH:mm A'
										  )}
								</div>
							)}
						</div>
						<div className='wrapper'>
							<Sunset className='icon' />
							{isHome ? (
								<div className='time'>
									{dateTime(
										current.CurrentWeather.sys.sunset,
										current.CurrentWeather.timezone,
										'HH:mm A'
									)}
								</div>
							) : (
								<div className='time'>
									{city
										? dateTime(
												city.CityWeather.city.sunset,
												city.CityWeather.city.timezone,
												'HH:mm A'
										  )
										: dateTime(
												current.CurrentWeather.sys.sunset,
												current.CurrentWeather.timezone,
												'HH:mm A'
										  )}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WeatherDetails;
