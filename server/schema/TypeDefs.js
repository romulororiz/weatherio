import { gql } from 'graphql-tag';

export const typeDefs = gql`
	# Queries
	type Query {
		CityWeather(name: String, cnt: Int, countryCode: String): Weather!
	}

	# Types
	type Weather {
		cnt: Int
		list: [List!]!
		city: City!
	}

	type List {
		dt: Int!
		main: WeatherMain!
		weather: [WeatherType]!
		wind: Wind!
		dt_txt: String!
	}

	type WeatherMain {
		temp: Float!
		feels_like: Float!
		temp_min: Float!
		temp_max: Float!
		pressure: Float!
		humidity: Float!
	}

	type WeatherType {
		id: ID!
		main: String!
		description: String!
		icon: String!
	}

	type Wind {
		speed: Float!
	}

	type City {
		id: ID!
		name: String!
		country: String!
		sunrise: Int!
		sunset: Int!
	}
`;
