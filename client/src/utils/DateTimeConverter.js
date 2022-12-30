const dayjs = require('dayjs');

export const dateTime = (unix, offset, format) => {
	let dt = new Date((unix + offset) * 1000);

	if (offset === null) {
		return dayjs.unix(unix).format(format);
	}

	return dayjs(dt).format(format);
};
