import { gql } from '@apollo/client';

const GET_CITY_WEATHER = gql`
	query getCityWeather($name: String!, $countryCode: String, $cnt: Int) {
		CityWeather(name: $name, countryCode: $countryCode, cnt: $cnt) {
			cnt
			city {
				name
				country
				sunrise
				sunset
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
				wind {
					speed
				}
				dt_txt
			}
		}
	}
`;

export { GET_CITY_WEATHER };
