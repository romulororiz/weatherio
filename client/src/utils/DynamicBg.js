export const dynamicBg = id => {
	const numId = +id;

	switch (true) {
		case numId >= 200 && numId <= 232:
			return 'bg-storm';
		case numId >= 300 && numId <= 321:
			return 'bg-rain';
		case numId >= 500 && numId <= 531:
			return 'bg-rain';
		case numId >= 600 && numId <= 622:
			return 'bg-snow';
		case numId >= 701 && numId <= 781:
			return 'bg-clouds';
		case numId === 800:
			return 'bg-clear';
		case numId === 801:
			return 'bg-few-clouds';
		case numId >= 801 && numId <= 804:
			return 'bg-clouds';
		default:
			return null;
	}
};
