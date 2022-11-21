import axios from 'axios';

export const resolvers = {
	Query: {
		async CityWeather(_root, { name, cnt }) {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=${cnt}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
			);
			return res.data;
		},
	},
};
