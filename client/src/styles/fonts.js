import { css } from 'styled-components/macro';

const fonts = css`
	@font-face {
		font-family: 'Inter';
		src: url('../fonts/Inter-v12-latin-100.woff2') format('woff2'),
			url('../fonts/Inter-v12-latin-100.woff') format('woff');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Inter';
		src: url('../fonts/Inter-v12-latin-300.woff2') format('woff2'),
			url('../fonts/Inter-v12-latin-300.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Inter';
		src: url('../fonts/Inter-v12-latin-Regular.woff2') format('woff2'),
			url('../fonts/Inter-v12-latin-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Inter';
		src: url('../fonts/Inter-v12-latin-700.woff2') format('woff2'),
			url('../fonts/Inter-v12-latin-700.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Inter';
		src: url('../fonts/Inter-v12-latin-900.woff2') format('woff2'),
			url('../fonts/Inter-v12-latin-900.woff') format('woff');
		font-weight: 900;
		font-style: normal;
	}
`;

export default fonts;
