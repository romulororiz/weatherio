import { useEffect, useState } from 'react';
import { convertToF } from '../utils/Converter';

const TempConverter = ({ city, currentWeather, isHome }) => {
	const [celsius, setCelsius] = useState(null);
	const [fahrenheit, setFahrenheit] = useState(null);
	const [celsiusActive, setCelsiusActive] = useState(true);
	const [fahrenheitActive, setFahrenheitActive] = useState(false);
	const [checked, setChecked] = useState(false);

	const onChange = e => {
		if (e.target.checked) {
			const fahrenheit = convertToF(celsius);
			setFahrenheit(fahrenheit);
			setCelsiusActive(false);
			setFahrenheitActive(true);
			setChecked(!checked);
		} else {
			setCelsiusActive(true);
			setChecked(!checked);
		}
	};

	useEffect(() => {
		if (isHome) {
			setCelsius(currentWeather.CurrentWeather.main.temp.toFixed());
		} else {
			if (city) {
				setCelsius(city.CityWeather.list[0].main.temp.toFixed());
			} else {
				if (currentWeather) {
					setCelsius(currentWeather.CurrentWeather.main.temp.toFixed());
				}
			}
		}

		if (checked) {
			setFahrenheit(convertToF(celsius));
		}
	}, [celsius, checked, city, currentWeather, isHome]);

	return (
		<div className='converter-wrapper'>
			<p className='temp'>
				{celsiusActive ? celsius : fahrenheitActive && fahrenheit}{' '}
				{celsiusActive ? <span>°C</span> : <span>°F</span>}
			</p>
			<div className='switch-button'>
				<input
					className='switch-button-checkbox'
					type='checkbox'
					onChange={onChange}
					checked={checked}
				></input>
				<label className='switch-button-label' htmlFor=''>
					<span className='switch-button-label-span'>C</span>
				</label>
			</div>
		</div>
	);
};
export default TempConverter;
