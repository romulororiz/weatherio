import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/scss/NotFound.scss';

const NotFound = () => {
	return (
		<div className='not-found'>
			<h1>
				Not Found <FaExclamationTriangle className='icon' />{' '}
			</h1>
		</div>
	);
};
export default NotFound;
