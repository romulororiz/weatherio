import axios from 'axios';

export const resolvers = {
	Query: {
		async CityWeather(_root, { cnt, name, countryCode }) {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${name},${countryCode}&cnt=${cnt}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
			);

			return res.data;
		},
		async CurrentWeather(_root, { lat, lon }) {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
			);
			return res.data;
		},
	},
};
