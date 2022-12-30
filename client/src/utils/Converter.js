export const convertToF = celsius => {
	return ((celsius * 9) / 5 + 32).toFixed();
};

export const convertToC = fahrenheit => {
	return (((fahrenheit - 32) * 5) / 9).toFixed();
};

export const visibilityConverter = visibility => {
	return `${(visibility / 1000).toFixed()} Km`;
};
