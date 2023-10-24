import axios from 'axios';

export const getUsers = () => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
		}
	};

    return axios.get('http://localhost:3001/api/users', config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error al cargar datos de la API:', error);
        throw error;
      });
}

export const deleteUser = (userId) => {
  const config = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
		}
	};
    return axios.delete(`http://localhost:3001/api/users/${userId}`,config)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error al eliminar el usuario con ID ${userId}:`, error);
        throw error;
      });
  }

  export const createUser = ({fullname,email,phone,username, password}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    };
    return axios
      .post('http://localhost:3001/api/users/register', {
        fullname,
        email,
        phone,
        username,
        password
      }, config)
      .catch(error => {
        throw error;
      });
  };

  export const getUserById = (userId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    };
    return axios.get(`http://localhost:3001/api/users/${userId}`,config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error al cargar datos de la API:', error);
        throw error;
    });
  } 
  
  export const updateUser = ({id,fullname,email,phone,username}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    };
    return axios.put(`http://localhost:3001/api/users/${id}`, {
        fullname,
        email,
        phone,
        username,
      }, config)
      .catch(error => {
        throw error;
      });
  };
  