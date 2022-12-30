import { gql } from '@apollo/client';

const GET_CITY_WEATHER = gql`
	query getCityWeather($name: String, $countryCode: String, $cnt: Int) {
		CityWeather(name: $name, countryCode: $countryCode, cnt: $cnt) {
			cnt
			city {
				name
				country
				sunrise
				sunset
				timezone
				id
			}
			list {
				dt
				main {
					temp
					feels_like
					temp_min
					temp_max
					pressure
					humidity
				}
				weather {
					id
					main
					description
					icon
				}
				clouds {
					all
				}
				wind {
					speed
				}
				visibility
				dt_txt
			}
		}
	}
`;

const GET_CURRENT_WEATHER = gql`
	query getCurrentWeather($lat: Float!, $lon: Float!) {
		CurrentWeather(lat: $lat, lon: $lon) {
			weather {
				id
				main
				description
				icon
			}
			main {
				temp
				feels_like
				temp_min
				temp_max
				pressure
				humidity
			}
			visibility
			clouds {
				all
			}
			wind {
				speed
			}
			dt
			sys {
				country
				sunrise
				sunset
			}
			timezone
			name
		}
	}
`;

export { GET_CITY_WEATHER, GET_CURRENT_WEATHER };
