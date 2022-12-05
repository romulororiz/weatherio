import { gql } from 'graphql-tag';

export const typeDefs = gql`
	# Queries
	type Query {
		CityWeather(name: String!, cnt: Int, countryCode: String): ForecastWeather!
		CurrentWeather(lat: Float!, lon: Float!): CurrentWeather!
	}

	# Types
	# Current Weather Types
	type CurrentWeather {
		coord: Coord!
		weather: [WeatherType!]!
		main: WeatherMain!
		visibility: Int!
		wind: Wind!
		dt: Int!
		sys: Sys!
		name: String!
	}

	type Coord {
		lat: Float
		lon: Float
	}

	type WeatherType {
		id: ID!
		main: String!
		description: String!
		icon: String!
	}

	type WeatherMain {
		temp: Float!
		feels_like: Float!
		temp_min: Float!
		temp_max: Float!
		pressure: Float!
		humidity: Float!
	}

	type Wind {
		speed: Float!
	}

	type Sys {
		country: String!
		sunrise: Int!
		sunset: Int!
	}

	# Forecast Types
	type ForecastWeather {
		cnt: Int
		list: [ForecastList!]!
		city: ForecastCity!
	}

	type ForecastList {
		dt: Int!
		main: ForecastWeatherMain!
		weather: [ForecastWeatherType]!
		wind: ForecastWind!
		visibility: Int!
		dt_txt: String!
	}

	type ForecastWeatherMain {
		temp: Float!
		feels_like: Float!
		temp_min: Float!
		temp_max: Float!
		pressure: Float!
		humidity: Float!
	}

	type ForecastWeatherType {
		id: ID!
		main: String!
		description: String!
		icon: String!
	}

	type ForecastWind {
		speed: Float!
	}

	type ForecastCity {
		id: ID!
		name: String!
		country: String!
		sunrise: Int!
		sunset: Int!
	}
`;
