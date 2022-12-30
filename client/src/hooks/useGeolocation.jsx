import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useGeolocation = () => {
	const [lat, setLat] = useState(null);
	const [lon, setLon] = useState(null);
	const [geoError, setGeoError] = useState(null);

	const geolocationAPI = navigator.geolocation;

	const getUserCoordinates = useCallback(() => {
		if (!geolocationAPI) {
			setGeoError('Geolocation API is not available in your browser!');
		} else {
			geolocationAPI.getCurrentPosition(
				position => {
					const { coords } = position;
					setLat(coords.latitude);
					setLon(coords.longitude);
				},
				error => {
					setGeoError('Something went wrong getting your position :(');
				}
			);
		}
	}, [geolocationAPI]);

	useEffect(() => {
		getUserCoordinates();
	}, [getUserCoordinates]);

	return { lat, lon, geoError };
};

export default useGeolocation;
