import React from 'react';
import { ReactComponent as Sunny } from '../assets/icons/wi-day-sunny.svg';
import { ReactComponent as FewClouds } from '../assets/icons/wi-day-cloudy.svg';
import { ReactComponent as BrokenClouds } from '../assets/icons/wi-cloudy.svg';
import { ReactComponent as Snow } from '../assets/icons/wi-snow.svg';
import { ReactComponent as Rain } from '../assets/icons/wi-rain.svg';
import { ReactComponent as Drizzle } from '../assets/icons/wi-rain-mix.svg';
import { ReactComponent as Thunderstorm } from '../assets/icons/wi-thunderstorm.svg';
import { ReactComponent as Atmosphere } from '../assets/icons/wi-fog.svg';

const Icon = ({ id, color, size }) => {
	const numId = +id;

	switch (true) {
		case numId >= 200 && numId <= 232:
			return <Thunderstorm fill={color} width={size} height={size} />;
		case numId >= 300 && numId <= 321:
			return <Drizzle fill={color} width={size} height={size} />;
		case numId >= 500 && numId <= 531:
			return <Rain fill={color} width={size} height={size} />;
		case numId >= 600 && numId <= 622:
			return <Snow fill={color} width={size} height={size} />;
		case numId >= 701 && numId <= 781:
			return <Atmosphere fill={color} width={size} height={size} />;
		case numId === 800:
			return <Sunny fill={color} width={size} height={size} />;
		case numId === 801:
			return <FewClouds fill={color} width={size} height={size} />;
		case numId >= 801 && numId <= 804:
			return <BrokenClouds fill={color} width={size} height={size} />;
		default:
			return null;
	}
};

export default Icon;
