import axios from 'axios';


export const auth = ({username, password}) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	};
	return axios
		.post('http://localhost:3001/api/users/login', {
			username,
			password
		}, config)
		.catch(error => {
			throw error;
		});
};
